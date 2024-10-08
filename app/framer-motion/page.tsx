"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

export default function FramerMotion() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function handleClick() {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  }
  return (
    <div className="max-w-[1200px] mx-auto h-screen mt-9">
      <h1 className="text-2xl font-bold text-center">Framer Motion 練習</h1>

      <motion.div
        className={`w-[100px] h-[100px] bg-blue-300 rounded-full translate-x-5 ${
          isOpen ? "translate-x-5" : "translate-x-0"
        }`}
        layout
        onClick={handleClick}
      ></motion.div>
    </div>
  );
}
