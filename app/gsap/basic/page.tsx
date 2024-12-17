"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function basic() {
  const ref = useRef(null);
  useGSAP(
    () => {
      gsap.from("h1", {
        opacity: 0,
        duration: 1,
        delay: 1,
        stagger: -1,
      });

      gsap.to(".box", {
        x: 200,
        duration: 2,
        delay: 1,
        rotate: 360,
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: ref }
  );
  return (
    <>
      <div ref={ref}>
        <h1 className="text-2xl">CodeTips</h1>
        <h1 className="text-2xl">CodeTips</h1>
        <h1 className="text-2xl">CodeTips</h1>
        <div className="box w-[300px] h-[300px] bg-red-500"></div>
      </div>
    </>
  );
}
