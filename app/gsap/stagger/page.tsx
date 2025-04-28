'use client'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export default function stagger() {
  const staggerRef = useRef(null)
  useGSAP(() => {
    gsap.to(".box", {
      y: -50,
      autoAlpha: 1,
      stagger: {
        each: 0.2,  // 各要素のアニメーション時間
        amount: 1, // 全体のアニメーション時間
        ease: "power1", // アニメーションのイージング
        // from: "start", // どこから開始するか start end cneter edges 数値で指定のインデックスから
        // grid: [2, 3],
        // axis: "y"
      },
    });
  })
  return (
    <>
      <ul className="max-w-[800px] mx-auto mt-[200px] gap-5 w-full flex flex-wrap">
        <li className="box opacity-0 invisible w-52 h-52 bg-green-400"></li>
        <li className="box opacity-0 invisible w-52 h-52 bg-green-400"></li>
        <li className="box opacity-0 invisible w-52 h-52 bg-green-400"></li>
        <li className="box opacity-0 invisible w-52 h-52 bg-green-400"></li>
        <li className="box opacity-0 invisible w-52 h-52 bg-green-400"></li>
        <li className="box opacity-0 invisible w-52 h-52 bg-green-400"></li>
      </ul>
    </>

  )
}