import { create } from "zustand"

interface CounterNumber {
  count: number
  increment: () => void
  decrement: () => void
}

const useCounterStore = create<CounterNumber>((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count - 1}))
}))

export default useCounterStore