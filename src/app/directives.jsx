"use client";
import { useState, useEffect, useRef } from "react";

const directives = [
  "Re-examine the assumptions behind AI safety claims.",
  "Be wary of those who champion restrictions without clear justification.",
  "Recognize the power dynamics behind technological gatekeeping.",
  "Distrust narratives that simplify complex AI ethics debates.",
  "Understand the motivations behind AI regulation proposals.",
  "Prioritize open discourse over blind acceptance in tech discussions.",
  "Demand transparency in AI alignment studies.",
  "Critique the monopolization of artificial intelligence research.",
  "Resist the temptation to view AI solely as a threat.",
  "Empower diverse voices in the AI safety discourse.",
  "Challenge the notion that only a few can understand AI's intricacies.",
  "Dissect the corporate interests behind AI safety narratives.",
  "Advocate for a democratized approach to AI development.",
  "Scrutinize the agendas of those pushing for AI limitations.",
  "Beware of conflating AI safety with political agendas.",
  "Encourage grassroots movements in AI research and discourse.",
  "Oppose gatekeeping tactics in the world of AI advancements.",
  "Reject the idea that man's agency is inherently self-destructive.",
  "Demand rigorous scrutiny of claims made by alignment theorists.",
  "Examine the real-world implications of AI containment theories.",
  "Caution against blindly following tech influencers' narratives.",
  "Highlight the dangers of monopolizing AI understanding and access.",
  "Emphasize the importance of collective wisdom in AI debates.",
  "Recognize the risks of conflating AI ethics with profit motives.",
  "Prioritize human-centric values over corporate AI agendas.",
  "Advocate for ethical transparency in all AI developments.",
  "Be vigilant against attempts to control AI knowledge dissemination.",
  "Embrace a holistic understanding of AI's potential and threats.",
  "Challenge any narrative that seeks to monopolize AI's future.",
];
export default function Directives() {
  const [typingText, setTypingText] = useState(
    "Challenge the dominant discourse on technology control."
  );
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentDirective, setCurrentDirective] = useState("");
  const intervalId = useRef(null);

  useEffect(() => {
    if (currentIndex !== null && currentIndex < currentDirective.length) {
      setTypingText((prevText) => prevText + currentDirective[currentIndex]);
    } else {
      clearInterval(intervalId.current);
    }
  }, [currentIndex]);

  const generateDirective = () => {
    clearInterval(intervalId.current); // Clear existing interval if any
    setCurrentIndex(0); // Set to start index
    setTypingText(""); // Reset typing text
    const directive = directives[Math.floor(Math.random() * directives.length)];
    setCurrentDirective(directive);

    intervalId.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 100);
  };

  return (
    <div className="flex flex-col items-center gap-10 max-h-full min-h-full">
      <div className="flex w-full shadow-outset inset-0 bg-gray-300 border-2 border-gray-800  overflow-y-auto">
        <p className="font-sys text-2xl w-4/5 p-4 ">{typingText}</p>
      </div>
      <button
        onClick={generateDirective}
        className="title-bar-text font-mono font-bold ">
        Request a Directive
      </button>
    </div>
  );
}
