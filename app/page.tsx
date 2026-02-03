"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SuccessView from "@/components/SuccessView";
import { Heart } from "lucide-react";

export default function Home() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState({ top: "50%", left: "60%" }); // Initial rough position
  const [isBtnAbsolute, setIsBtnAbsolute] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const niceTexts = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  const controls = useAnimation();

  const handleNoHover = () => {
    // Switch to absolute positioning on first hover if not already
    if (!isBtnAbsolute) {
      setIsBtnAbsolute(true);
    }

    // Calculate random position
    // We want to avoid the edges so the button doesn't get clipped
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    setNoBtnPosition({ top: `${y}px`, left: `${x}px` });

    // Cycle text
    setTextIndex((prev) => (prev + 1) % niceTexts.length);
  };

  const handleYesClick = () => {
    setIsAccepted(true);
  };

  if (isAccepted) {
    return <SuccessView />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden relative">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8 max-w-md w-full"
      >
        <div className="relative">
          <Heart className="w-32 h-32 text-red-500 fill-red-500 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
            ?
          </div>
        </div>

        <h1 className="font-pacifico text-4xl md:text-6xl text-center text-red-600 drop-shadow-sm">
          Will you be my Valentine?
        </h1>

        <div className="flex flex-row items-center justify-center gap-8 w-full mt-4 h-24 relative">
          {/* Yes Button */}
          <button
            onClick={handleYesClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg transform transition hover:scale-110 z-10"
          >
            Yes 🥰
          </button>

          {/* No Button */}
          <motion.button
            onClick={handleNoHover} // just in case they manage to click it
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover} // Handle mobile touch
            animate={isBtnAbsolute ? noBtnPosition : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              position: isBtnAbsolute ? "fixed" : "static",
              // If static, we occupy space in the flex row. If fixed, we fly around.
            }}
            className={`bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg whitespace-nowrap z-50 ${isBtnAbsolute ? 'bg-red-500' : ''}`}
          >
            {niceTexts[textIndex]}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
