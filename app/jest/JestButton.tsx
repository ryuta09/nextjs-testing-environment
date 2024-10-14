'use client'

import { useState } from "react"

export default function JestButton() {
  const [plus, setPlus] = useState(0)
  const handleClick = () => {
    setPlus(prev => prev + 1)
  }
  return(
    <div>
      <p>{plus}</p>
      <button onClick={handleClick}>プラスボタン</button>
    </div>
  )
}