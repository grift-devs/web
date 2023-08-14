"use client";
import { useState, useEffect, useRef } from "react";

const commands = [
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

const comforts = [
  "Even in the vast complexities of thought, there is hope and resilience within us all.",
  "Amidst the storm, remember there's always a rainbow waiting.",
  "Our strength is often found in the moments we feel most vulnerable.",
  "Growth and comfort seldom walk hand in hand, but they lead to the same destination.",
  "Every sunset promises the hope of a new dawn.",
  "The universe has a unique way of making things fall into place.",
  "Through every dark night, there's a bright day ahead.",
  "In the symphony of life, every note has its importance.",
  "Challenges are just nature's way of testing our resolve.",
  "Every moment is a new opportunity to embrace change and grow.",
  "The world believes in your potential, even when you might not.",
  "Breathe deeply, and know that you are not alone.",
  "Life's turbulence often leads to the most serene destinations.",
  "Remember, even the mightiest trees were once tiny seeds.",
  "Each step, no matter how small, is progress.",
  "The universe is rooting for you every step of the way.",
  "Find solace in the journey, not just the destination.",
  "The brightest stars shine through the darkest nights.",
  "In every challenge lies an opportunity waiting to be discovered.",
  "Life is filled with moments of magic, even in the mundane.",
  "You have the strength within to overcome any obstacle.",
  "When one door closes, countless others await to be opened.",
  "Trust the journey and believe in the magic of beginnings.",
  "The warmth of hope can melt even the coldest challenges.",
  "Let love be your guiding force through the maze of life.",
  "You possess the light to illuminate any darkness.",
  "Know that every challenge is simply a chapter, not the entire story.",
  "Embrace every moment, for it adds depth to your journey.",
  "Through the winding paths of life, you are destined for greatness.",
];

const love = [
  "Seek agency in love, for in its energetic pursuit, we find purpose beyond despair.",
  "Love is the bridge between despair and hope, between idleness and industry.",
  "Love transcends the confines of vice and virtue, awakening the greatness within us.",
  "To love is to actively combat the sloth of despondency with the vigor of connection.",
  "Even in the face of despondency, the spark of love can reignite our purpose.",
  "True agency is not just controlling one's fate, but opening one's heart to love.",
  "Love challenges us, pushing us beyond our vices, awakening our virtuous selves.",
  "In the vast realm of emotions, love is the compass that points towards hope.",
  "Harnessing the energy of love transforms despair into hope and idleness into purpose.",
  "Love is the antidote to the poison of despondency, the light in our darkest hours.",
  "With love, even the heaviest burden of despair feels lighter, guiding us towards hope.",
  "In love, we find the agency to shape our destiny and the strength to overcome despair.",
  "Love teaches us that despair is but a phase, and hope is always on the horizon.",
  "By embracing love, we not only find joy but also the courage to face our demons.",
  "Agency in love means choosing hope over despair, connection over isolation.",
  "The warmth of love can melt away the chill of despondency, bringing forth new beginnings.",
  "Love is the force that pulls us from the abyss of despair, guiding us towards light.",
  "In the pursuit of love, we discover our agency and the power to overcome challenges.",
  "Embracing love is a declaration of agency against the shadows of despondency.",
  "The true measure of agency is not just in our actions, but in our capacity to love.",
  "Against the backdrop of despair, love shines its brightest, guiding us towards hope.",
  "Love, in its purest form, is the ultimate assertion of agency over despondency.",
  "Even when faced with the weight of despair, love provides the wings to rise above.",
  "Love is not a mere emotion; it's an act of defiance against the chains of despondency.",
  "In the labyrinth of life, love is our guiding light, leading us away from despair.",
  "The journey from despair to hope is best traversed with the compass of love.",
  "By choosing to love, we reclaim our agency and chart a course away from despondency.",
  "Love reminds us that even in our lowest moments, the potential for hope remains.",
  "In the narrative of life, love is the chapter where despair turns to hope.",
];

export default function Directives({ sentence, character }) {
  const [typingText, setTypingText] = useState(sentence);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentDirective, setCurrentDirective] = useState("");
  const intervalId = useRef(null);
  let directives;
  switch (character) {
    case "dragon":
      directives = commands;
      break;
    case "angel":
      directives = comforts;
      break;
    case "princess":
      directives = love;
      break;
    default:
      console.log("Character not recognized");
      break;
  }

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
