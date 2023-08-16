"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// import Stats from "three/addons/libs/stats.module.js";

const vertexShader = `
    attribute float size;
    varying vec3 vColor;
    void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_PointSize = size * ( 300.0 / -mvPosition.z );
        gl_Position = projectionMatrix * mvPosition;
    }
`;

const fragmentShader = `
    uniform sampler2D pointTexture;
    varying vec3 vColor;
    void main() {
        gl_FragColor = vec4( vColor, 1.0 );
        gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
    }
`;

const ParticleComponent = () => {
  const containerRef = useRef(null);
  const particles = 100000;

  useEffect(() => {
    let camera, scene, renderer, particleSystem, uniforms, geometry;

    function init() {
      camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.z = 300;

      scene = new THREE.Scene();

      uniforms = {
        pointTexture: {
          value: new THREE.TextureLoader().load("/sprites/ak47.png"),
        },
      };

      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
        vertexColors: true,
      });

      const radius = 200;
      geometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];
      const sizes = [];
      const color = new THREE.Color();

      for (let i = 0; i < particles; i++) {
        positions.push((Math.random() * 2 - 1) * radius);
        positions.push((Math.random() * 2 - 1) * radius);
        positions.push((Math.random() * 2 - 1) * radius);

        color.setHSL(i / particles, 1.0, 0.5);
        colors.push(color.r, color.g, color.b);
        sizes.push(20);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );
      geometry.setAttribute(
        "size",
        new THREE.Float32BufferAttribute(sizes, 1).setUsage(
          THREE.DynamicDrawUsage
        )
      );

      particleSystem = new THREE.Points(geometry, shaderMaterial);
      scene.add(particleSystem);

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setClearColor(0x0000, 0);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // const stats = new Stats();
      // containerRef.current.appendChild(stats.dom);

      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);

      render();
      // stats.update();
    }

    function render() {
      const time = Date.now() * 0.005;
      particleSystem.rotation.z = 0.01 * time;

      const sizes = geometry.attributes.size.array;
      for (let i = 0; i < particles; i++) {
        sizes[i] = 10 * (1 + Math.sin(0.1 * i + time));
      }
      geometry.attributes.size.needsUpdate = true;
      renderer.render(scene, camera);
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div
      className={"fixed w-full h-full z-10 top-0 left-0"}
      ref={containerRef}></div>
  );
};

export default ParticleComponent;
