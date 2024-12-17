"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function scrolltrigger1() {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.to(".page2 .box", {
      transform: "translate(-50%)",
      scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
      },
    });
  }, {scope: ref});
  return (
    <>
      <div ref={ref}>
        <div className="page page1 w-full h-screen flex items-center justify-center bg-red-500">
          <div className="box w-[400px] h-[400px] bg-slate-500"></div>
        </div>
        <div className="page page2 w-full h-screen flex items-center justify-center bg-blue-500">
          <div className="box w-[400px] h-[400px] bg-slate-500"></div>
        </div>
        <div className="page page3 bg-green-500 w-full h-screen flex items-center justify-center">
          <div className="box w-[400px] h-[400px] bg-slate-500"></div>
        </div>
      </div>
    </>
  );
}
