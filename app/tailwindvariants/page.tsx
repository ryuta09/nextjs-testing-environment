import React from 'react'
import Button from '../components/Button'

const TailwindVariants = () => {
  return (
    <div className='max-w-[1000px] w-full mx-auto my-5 px-3'>
      <h2 className='text-4xl text-center font-bold'>TailwindVariants</h2>
      <Button color='secondary' size='lg'>基本</Button>

      <div className='flex items-center gap-2 my-4'>
        <Button color='secondary' size='sm'>secondary</Button>
        <Button color='primary' size='md'>primary</Button>
        <Button color='success' size='lg'>success</Button>
      </div>

      <div className='my-4'>
        <p>別のバリアントに依存するバリアントを追加したい場合</p>
        <Button color='success' size='lg' disabled={true}>success</Button>
      </div>

      <div className='my-4'>
        <p>複数のバリアントを定義するパターン</p>
        <Button color='secondary' size='lg' disabled={true}>success</Button>
        <Button color='primary' size='lg' disabled={true}>success</Button>
      </div>

      <div className='my-4'>
        <p>responsiveVariantsでレスポンシブ対応を定義</p>
        <Button color={{initial: 'primary', sm: 'success', md:'secondary'}} size={{initial: 'sm', sm: 'md', md: 'lg'}}>success</Button>
        <Button color={{initial: 'secondary', sm: 'success', md:'primary'}} size={{initial: 'sm', sm: 'md', md: 'lg'}}>success</Button>
      </div>
    </div>
  )
}

export default TailwindVariants