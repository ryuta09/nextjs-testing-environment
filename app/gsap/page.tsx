"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function gsapPractice() {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.to(".page2 h1", {
      transform: "translate(-50%)",
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        pin: true,
      },
    });
  }, {});
  return (
    <>
      <div ref={ref}>
        <div className="page page1 w-full h-screen flex items-center justify-center bg-black">
          <div className="box w-[400px] h-[400px] bg-lightblue"></div>
        </div>
        <div className="page page2  w-full m-0 h-screen flex items-center justify-center bg-blue-500">
          <h1 className="ml-[95%] text-[40vw] whitespace-nowrap">Code Tips</h1>
        </div>
        <div className="page page3 bg-black w-full h-screen flex items-center justify-center">
          {" "}
        </div>
      </div>
    </>
  );
}
