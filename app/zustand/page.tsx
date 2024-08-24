import useCounterStore from "../stores/store"

const Zustand = () => {
  const {count, increment, decrement } = useCounterStore()
  return (
    <>
      <h2>count</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Zustand