"use client";
import React, { useState } from "react";

function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  const playAudio = () => {
    const audio = new Audio("/audio.mp3"); // Adjust the path if needed
    // audio.currentTime = 0;
    audio.play();
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="window p-6 rounded-lg z-10">
        <div className="title-bar">
          <div className="title-bar-text flex flex-col lg:flex-row lg:gap-8 sm:gap-1 items-center justify-center">
            ❤HELLO BPD GANG!❤
          </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="flex space-x-4 justify-center m-5">
          <button
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-400"
            onClick={playAudio}>
            YES
          </button>
          <button
            className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-400"
            onClick={playAudio}>
            YES
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
