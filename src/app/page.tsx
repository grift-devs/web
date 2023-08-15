"use client";
import Image from "next/image";
import SnowCanvas from "./snowMaker";
import { useState, useEffect } from "react";
import Directives from "./directives";
import "98.css";
import TitleBar from "./components/titlebar";
import Menu from "./components/menu";
import Tabs from "./components/tabs";
import Navbar from "./components/navbar";
import Popup from "./components/popup";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between p-24 ">
      {/* <ParticleComponent /> */}
      <SnowCanvas />
      <Popup />
      <div className="flex flex-col gap-46 z-10">
        <div>
          <div className="glowy bg-gray-100/70">
            <TitleBar title={"𝒈𝒓𝒆𝒆𝒕𝒊𝒏𝒈𝒔, 𝒇𝒆𝒍𝒍𝒐𝒘 𝒊𝒏𝒕𝒆𝒓𝒏𝒆𝒕 𝒆𝒙𝒑𝒍𝒐𝒓𝒆𝒓!"} />
            <Navbar />

            <div className="relative flex-col max-w-5xl">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/bpd_logo.png"
                alt="main"
                width={1000}
                height={300}
                priority
              />
            </div>
            <Menu />
          </div>
        </div>
        <div className="glowy max-w-5xl mt-44 bg-gray-100/70" id={"about"}>
          <TitleBar title="BPD Knowledge" />
          <Tabs />
        </div>

        <div className="glowy max-w-6xl mt-44 bg-gray-100/70">
          <TitleBar title="VPL" />
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex window-body">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
          </div>

          <div className="relative flex place-items-center max-w-5xl p-4">
            <p className="font-sys text-base color-white" id="about">
              VIRAL PUBLIC LICENSE (ɔ) All Rights Reversed This WORK is hereby
              relinquished of all associated ownership, attribution and copy
              rights, and redistribution or use of any kind, with or without
              modification, is permitted without restriction subject to the
              following conditions: 1. Redistributions of this WORK, or ANY work
              that makes use of ANY of the contents of this WORK by ANY kind of
              copying, dependency, linkage, or ANY other possible form of
              DERIVATION or COMBINATION, must retain the ENTIRETY of this
              license. 2. No further restrictions of ANY kind may be applied.
            </p>
          </div>
        </div>
      </div>
      <div className="text-rose-500 text-fuchsia-500 text-blue-500 text-teal-500 text-indigo-500 text-yellow-500 text-green-500"></div>
    </main>
  );
}

const ImageRotator = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/drawings/moon.png",
    "/drawings/sun.png",
    "/drawings/stars.png",
    "/drawings/wind.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 200);

    // Cleanup: clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Image
        width={500}
        height={500}
        src={images[currentImageIndex]}
        alt="Rotating Content"
      />
    </div>
  );
};
