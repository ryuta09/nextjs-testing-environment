import React from 'react'
import Button from '../components/Button'

const TailwindVariants = () => {
  return (
    <div className='max-w-[1000px] w-full mx-auto my-5 px-3'>
      <h2 className='text-2xl text-center '>TailwindVariants</h2>
      <Button color='secondary' size='lg'>基本</Button>
    </div>
  )
}

export default TailwindVariants