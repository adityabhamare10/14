"use client";

import { motion } from "framer-motion";
import Confetti from "./Confetti";

export default function SuccessView() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <Confetti />
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl z-10 max-w-lg"
            >
                <div className="text-6xl mb-4">🥰🎉❤️</div>
                <h1 className="font-pacifico text-4xl md:text-5xl text-red-600 mb-6">
                    Yay! I knew you'd say yes!
                </h1>
                <p className="font-inter text-xl text-gray-700 mb-6">
                    You just made me the happiest person in the world.
                    <br />I love you so much! ❤️
                </p>
                <div className="text-6xl animate-bounce">🐻🌹</div>
            </motion.div>
        </div>
    );
}
