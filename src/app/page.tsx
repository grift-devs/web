"use client";
import Image from "next/image";
import SnowCanvas from "./snowMaker";
import ParticleComponent from "./background";
import Query from "./getData";
import { useState, useEffect } from "react";
import Directives from "./directives";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <ParticleComponent />
      <div className="flex flex-col gap-46 z-10">
        <div>
          <div className=" max-w-8xl bg-gray-100/70">
            <div className="z-10 max-w-6xl w-full items-center justify-center title-bar">
              <p className="text-white title-bar-text">
                𝒈𝒓𝒆𝒆𝒕𝒊𝒏𝒈𝒔, 𝒇𝒆𝒍𝒍𝒐𝒘 𝒊𝒏𝒕𝒆𝒓𝒏𝒆𝒕 𝒆𝒙𝒑𝒍𝒐𝒓𝒆𝒓!
              </p>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex window-body">
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-700 pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:border lg:bg-gray-200 lg:p-1 lg:dark:bg-zinc-800/30">
                <button className="title-bar-text font-mono font-bold">
                  0x000000000000000000000000000000000000dead
                </button>

                <button className="title-bar-text font-mono font-bold text-rose-500">
                  dextools
                </button>
                <button className="title-bar-text font-mono font-bold text-rose-500">
                  etherscan
                </button>
                <button className="title-bar-text font-mono font-bold text-rose-500">
                  twitter
                </button>
                <button className="title-bar-text font-mono font-bold text-rose-500">
                  telegram
                </button>
              </p>
              <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <a
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer">
                  <Image
                    src="/2.jpeg"
                    alt="logo"
                    className="z-12"
                    width={100}
                    height={24}
                    priority
                  />
                </a>
              </div>
            </div>

            <div className="relative flex-col place-items-center max-w-5xl">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/anae_logo_full.png"
                alt="main"
                width={1000}
                height={300}
                priority
              />
            </div>
          </div>

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            {MenuButtons.map((d, idx) => (
              <MenuButton key={idx} {...d} />
            ))}
          </div>
        </div>
        <div className="max-w-5xl mt-44 bg-gray-100/70" id={"section"}>
          <div className="z-10 title-bar">
            <p className="text-white title-bar-text">{"hello"}</p>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <Tabs />
        </div>

        <div className=" max-w-6xl mt-44 bg-gray-100/70">
          <div className="z-10 max-w-5xl w-full items-center justify-center title-bar">
            <p className="text-white title-bar-text">VPL -</p>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex window-body">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
          </div>

          <div className="relative flex place-items-center max-w-5xl p-12">
            <p className="font-western text-2xl" id="about">
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
      <div className="text-rose-500 text-fuchsia-500 text-blue-500 text-teal-500 text-indigo-500 text-yellow-500"></div>
    </main>
  );
}

const MenuButtons = [
  {
    linkTo: "#about",
    Title: "Dragon",
    Subtitle: "The ANAE Leader",
    Color: "rose",
  },
  {
    linkTo: "#tokenomics",
    Title: "Angel",
    Subtitle: "The head of ANAE finances",
    Color: "teal",
    isExternal: false,
  },
  {
    linkTo: "#community",
    Title: "Princess",
    Subtitle: "The creative talent of the group!",
    Color: "indigo",
  },
  {
    linkTo: "uniswap",
    Title: "Buy",
    Subtitle: "Support AiCC",
    Color: "yellow",
    isExternal: true,
  },
];

interface MenuButtonProps {
  linkTo: string;
  Title: string;
  Subtitle: string;
  Color: string;
  isExternal?: boolean | undefined;
}

const MenuButton = ({
  linkTo,
  Title,
  Subtitle,
  Color,
  isExternal,
}: MenuButtonProps) => (
  <button className="border border-transparent bg-gray-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/90">
    <a
      href={linkTo}
      className={`text-${Color}-500 group rounded-lg`}
      target={isExternal ? "_blank" : undefined}
      rel="noopener noreferrer">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {Title}
        <span
          className={`inline-block transition-transform ${
            isExternal ? null : "rotate-90"
          } group-hover:translate-x-1 motion-reduce:transform-none`}>
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50 color`}>{Subtitle}</p>
    </a>
  </button>
);

function Tabs() {
  const [activeTab, setActiveTab] = useState("Dragon");

  return (
    <div>
      <menu role="tablist" className="flex w-full">
        <li
          className="flex-1"
          role="tab"
          aria-selected={activeTab === "Dragon"}
          onClick={() => setActiveTab("Dragon")}>
          <a href="#tabs">
            <p className="font-western text-4xl">Dragon</p>
          </a>
        </li>
        <li
          className="flex-1"
          role="tab"
          aria-selected={activeTab === "Angel"}
          onClick={() => setActiveTab("Angel")}>
          <a href="#tabs">
            <p className="font-western text-4xl">Angel</p>
          </a>
        </li>
        <li
          className="flex-1"
          role="tab"
          aria-selected={activeTab === "Princess"}
          onClick={() => setActiveTab("Princess")}>
          <a href="#tabs">
            <p className="font-western text-4xl">Princess</p>
          </a>
        </li>
      </menu>
      <div className="window" role="tabpanel">
        <div className="window-body">
          {activeTab === "Dragon" && (
            <TeamPfps
              title="The Leader"
              image="/drawings/2.png"
              text="Seeking purpose?"
              reverse={false}
              color="green"
              section="about"
            />
          )}
          {activeTab === "Angel" && (
            <TeamPfps
              title="The Money"
              image="/drawings/1.png"
              text="fearless and powerful dragon"
              reverse={true}
              color="fuchsia"
              section="tokenomics"
            />
          )}
          {activeTab === "Princess" && (
            <TeamPfps
              title="The Art"
              image="/drawings/3.png"
              text="fearless and powerful dragon"
              reverse={false}
              color="blue"
              section="community"
            />
          )}
        </div>
      </div>
    </div>
  );
}

const TeamPfps = ({
  title,
  image,
  text,
  reverse,
  color,
  section,
}: {
  title: string;
  image: string;
  text: string;
  reverse: boolean;
  color: string;
  section: string;
}) => {
  return (
    <div className="relative flex place-items-center w-full h-full">
      <div className="flex flex-col gap-20 m-4 w-full">
        <div
          className={`flex ${
            reverse ? "flex-row-reverse" : "flex-row"
          } gap-20`}>
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-full h-full shadow-outset inset-0 border-t-4 border-transparent"
            src={image}
            alt="main"
            width={500}
            height={500}
            priority
          />

          <div className="flex w-3/5 bg-gray-800/50 p-4 justify-center">
            <div
              className={`font-sys text-2xl text-white flex flex-col justify-center items-center`}>
              {text}
              <div className={`p-4 text-${color}-500`}>
                <Directives />
              </div>
            </div>
            {/* <button onClick={() => Query(pfp)}>
                <p className="font-sys text-lg">hello</p>
              </button> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

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
