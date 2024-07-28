import React from 'react'
import Button from '../components/Button'

const TailwindVariants = () => {
  return (
    <div className='max-w-[1000px] w-full mx-auto my-5 px-3'>
      <h2 className='text-2xl text-center '>TailwindVariants</h2>
      <Button color='secondary' size='lg'>基本</Button>

      <div className='flex items-center gap-2 my-4'>
        <Button color='secondary' size='sm' disabled={true}>secondary</Button>
        <Button color='primary' size='md'>primary</Button>
        <Button color='success' size='lg'>success</Button>
      </div>
    </div>
  )
}

export default TailwindVariants