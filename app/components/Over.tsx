import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const over = tv({
  base: 'font-semibold text-white py-1 px-3 rounded-full active:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 hover:bg-blue-700',
      secondary: 'bg-purple-500 hover:bg-purple-700',
      success: 'bg-green-500 hover:bg-green-700',
      error: 'bg-red-500 hover:bg-red-700'
    } 
  }
})

type OverType = VariantProps<typeof over>

interface OverTypeProps extends OverType {
  className: string
}

const Over = ({color, className}:OverTypeProps) => {
  return (
    <div className={over({color, className})}>Over</div>
  )
}

export default Over