/**
 * A simple snow maker using canvas by Regis Gaughan, III.
 * The `SnowMaker` will instatiate with a `canvas` field to attach to the dom
 * and public methods to start, stop, and pause the animation.
 */
"use client";

import React, { useEffect, useRef } from "react";

const SnowCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const snowMakerRef = useRef<SnowMaker | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      document.body.appendChild(canvasRef.current);
      snowMakerRef.current = new SnowMaker(canvasRef.current);
      snowMakerRef.current.start();
    }

    return () => {
      if (snowMakerRef.current) {
        snowMakerRef.current.stop();
      }
      if (canvasRef.current && canvasRef.current.parentElement) {
        canvasRef.current.parentElement.removeChild(canvasRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="snowmaker" />;
};

interface SnowFlake {
  /** The current x position. */
  x: number;
  /** The current y position. */
  y: number;
  /** The radius. */
  radius: number;
  /** A value to add to y movement to speed/slow itself. */
  drop: number;
  /** A pixel value to add to x movement to speed/slow itself. */
  sway: number;
  // color: string;
  // colorChangeRate: number;
  /** Timer to keep track of the last color change. */
  // lastColorChange: number;
}

/** The snow maker. */
class SnowMaker {
  readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly flakes: SnowFlake[] = [];
  private angle = Math.random();
  private animFrameId: number | null = 0;
  private snowflakeImage = new Image();

  constructor(canvas: HTMLCanvasElement, numOfFlakes = randomInt(50, 100)) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d")!;
    this.snowflakeImage.src = "/cloud.png";
    this.initCanvas();
    this.generateFlakes(numOfFlakes);
    this.attachEvents();
  }

  /** Start the animation. */
  start() {
    if (!this.animFrameId) {
      this.setCanvasSize();
      this.requestDraw();
    }
  }

  /** Pause the animation. */
  pause() {
    if (this.animFrameId) {
      window.cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  /** Stop the animation (pause + clear). */
  stop() {
    this.pause();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /** Initialize the canvas & its styles. */
  private initCanvas() {
    this.canvas.className = "snow";
    this.canvas.style.position = "fixed";
    this.canvas.style.top = "0";
    this.canvas.style.left = "0";
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.canvas.style.pointerEvents = "none";
    this.canvas.style.zIndex = "1";
    this.setCanvasSize();
  }

  /** Set the canvase size. */
  private setCanvasSize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  /** Attach any events we're interested in. */
  private attachEvents() {
    window.addEventListener("resize", () => {
      this.setCanvasSize();
    });
  }

  private now(): number {
    return Date.now();
  }

  /** Generate our flakes. */
  private generateFlakes(numOfFlakes: number) {
    const currentTime = this.now();
    this.flakes.length = 0;
    for (var i = 0; i < numOfFlakes; i++) {
      this.flakes.push({
        x: randomInt(0, this.canvas.width),
        y: randomInt(0, this.canvas.height),
        radius: random(0.55, 5),
        sway: random(-0.1, 0.1),
        drop: random(-0.15, 0.15),
        // color: this.randomColor(),
        // colorChangeRate: randomInt(1000, 5000), // Change color every 1 to 5 seconds
        // lastColorChange: currentTime,
      });
    }
  }

  private randomColor(): string {
    const r = randomInt(0, 255);
    const g = randomInt(0, 255);
    const b = randomInt(0, 255);
    return `rgb(${r},${g},${b})`;
  }

  /** Request a draw on the next animation frame. */
  private requestDraw() {
    this.animFrameId = window.requestAnimationFrame(() => {
      this.draw();
    });
  }

  /** The meat, drawing our snowflakes on each frame. */
  private draw() {
    // Increment our angle. We use trigonometry to gently sway
    // our snowflakes back and forth
    this.angle = this.angle + 0.002;
    // const currentTime = this.now();

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    // this.ctx.fillStyle = "rgba(255, 253, 128, 0.66)";
    this.flakes.forEach((flake) => {
      // if (currentTime - flake.lastColorChange > flake.colorChangeRate) {
      //   flake.color = this.randomColor();
      //   flake.lastColorChange = currentTime;
      // }

      // this.ctx.fillStyle = flake.color;
      // this.ctx.moveTo(flake.x, flake.y);
      // this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      this.ctx.drawImage(
        this.snowflakeImage,
        flake.x - flake.radius,
        flake.y - flake.radius,
        flake.radius * 30,
        flake.radius * 20
      );

      // Update our flake's next x/y.
      flake.y += 0.25 + flake.drop;
      flake.x += Math.sin(this.angle) * 0.5 + flake.sway;
      if (flake.x > this.canvas.width + flake.radius * 2) {
        flake.x = randomInt(-25, flake.radius * -2);
      } else if (flake.x < flake.radius * -2) {
        flake.x = this.canvas.width + randomInt(flake.radius * 2, 25);
      } else if (flake.y > this.canvas.height) {
        flake.x = randomInt(0, this.canvas.width);
        flake.y = flake.radius * -2;
      }
    });
    this.ctx.fill();
    this.requestDraw();
  }
}

/** Helper function returning a random decimal between min and max. */
function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
/** Helper functions to generate a random int inclusive of min and max. */
function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default SnowCanvas;
