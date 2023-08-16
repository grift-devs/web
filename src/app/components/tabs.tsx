"use client";
import { useState } from "react";
import Image from "next/image";
import Directives from "../directives";

function Tabs() {
  const [activeTab, setActiveTab] = useState("Psycho");

  return (
    <div>
      <menu role="tablist" className="glowy flex w-full">
        <li
          className="flex-1"
          role="tab"
          aria-selected={activeTab === "Psycho"}
          onClick={() => setActiveTab("Psycho")}>
          <a href="#tabs">
            <p className="font-sys text-4xl text-red-500">Psycho</p>
          </a>
        </li>
        <li
          className="flex-1"
          role="tab"
          aria-selected={activeTab === "NEET"}
          onClick={() => setActiveTab("NEET")}>
          <a href="#tabs">
            <p className="font-sys text-4xl text-red-500">NEET</p>
          </a>
        </li>
        <li
          className="flex-1"
          role="tab"
          aria-selected={activeTab === "Player"}
          onClick={() => setActiveTab("Player")}>
          <a href="#tabs">
            <p className="font-sys text-4xl text-red-500">Player</p>
          </a>
        </li>
      </menu>
      <div className="window" role="tabpanel">
        <div className="window-body">
          {activeTab === "Psycho" && (
            <TeamPfps
              title="The Leader"
              image="/pfps/psycho_.png"
              text="Seeking purpose?"
              reverse={false}
              color="black"
              section="about"
              sentence="Always control the narrative; if they believe your version, you lead the game."
              character="psycho"
            />
          )}
          {activeTab === "NEET" && (
            <TeamPfps
              title="The Art"
              image="/pfps/neet.png"
              text="Seeking comfort?"
              reverse={false}
              color="red"
              section="community"
              sentence="Unlock the fifth chakra of WiFi connection. The universe awaits through a 5G portal."
              character="neet"
            />
          )}
          {activeTab === "Player" && (
            <TeamPfps
              title="The Money"
              image="/pfps/player.png"
              text="Seeking Love?"
              reverse={false}
              color="orange"
              section="tokenomics"
              sentence="Leverage digital scarcity; your limited online presence can boost demand."
              character="player"
            />
          )}
        </div>
      </div>
    </div>
  );
}

const TeamPfps = ({
  image,
  text,
  color,
  sentence,
  character,
}: {
  title: string;
  image: string;
  text: string;
  reverse: boolean;
  color: string;
  section: string;
  sentence: string;
  character: string;
}) => {
  return (
    <div className="relative flex place-items-center w-full h-full">
      <div className="flex flex-col gap-20 m-4 w-full">
        <div className="flex lg:flex-row gap-20 flex-col">
          <Image
            className="glowy dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-full h-full shadow-outset inset-0 border-t-0 border-transparent"
            src={image}
            alt="main"
            width={500}
            height={500}
            priority
          />

          <div className="flex sm:w-full lg:w-3/5 bg-gray-800/50 p-4 justify-center">
            <div
              className={`font-sys text-2xl text-white flex flex-col justify-center items-center`}>
              {text}
              <div className={`p-4 text-${color}-500`}>
                <Directives sentence={sentence} character={character} />
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

export default Tabs;
