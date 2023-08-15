"use client";
import { useState } from "react";
import Image from "next/image";
import Directives from "../directives";

function Tabs() {
  const [activeTab, setActiveTab] = useState("Dragon");

  return (
    <div>
      <menu role="tablist" className="glowy flex w-full">
        <li
          className="flex-1"
          role="tab"
          aria-selected={activeTab === "Dragon"}
          onClick={() => setActiveTab("Dragon")}>
          <a href="#tabs">
            <p className="font-sys text-4xl text-blue-500">Dragon</p>
          </a>
        </li>
        <li
          className="flex-1"
          role="tab"
          aria-selected={activeTab === "Angel"}
          onClick={() => setActiveTab("Angel")}>
          <a href="#tabs">
            <p className="font-sys text-4xl text-blue-500">Angel</p>
          </a>
        </li>
        <li
          className="flex-1"
          role="tab"
          aria-selected={activeTab === "Princess"}
          onClick={() => setActiveTab("Princess")}>
          <a href="#tabs">
            <p className="font-sys text-4xl text-blue-500">Princess</p>
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
              sentence="Challenge the dominant discourse on technology control."
              character="dragon"
            />
          )}
          {activeTab === "Angel" && (
            <TeamPfps
              title="The Money"
              image="/drawings/1.png"
              text="Seeking comfort?"
              reverse={false}
              color="fuchsia"
              section="tokenomics"
              sentence="Every challenge we face only adds to the tapestry of our story."
              character="angel"
            />
          )}
          {activeTab === "Princess" && (
            <TeamPfps
              title="The Art"
              image="/drawings/3.png"
              text="Seeking love?"
              reverse={false}
              color="blue"
              section="community"
              sentence="In the dance of agency and fate, love is the melody that guides our steps."
              character="princess"
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
            className="glowy dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-full h-full shadow-outset inset-0 border-t-4 border-transparent"
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
