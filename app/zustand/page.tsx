'use client'
import Button from "../components/Button"
import useCounterStore from "../stores/store"

const Zustand = () => {
  const {count, increment, decrement } = useCounterStore()
  return (
    <div className="container mx-auto px-4 text-center mt-4">
      <h2 className="text-2xl">count: {count}</h2>
      <div className="flex items-center justify-center gap-4 mt-4">
        <Button color='primary'size='md' onClick={increment}>Increment</Button>
        <Button color='secondary'size='md' onClick={decrement}>Dncrement</Button>
      </div>
    </div>
  )
}

export default Zustand