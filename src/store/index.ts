import { create } from 'zustand'
interface CountState {
    count: number
    addCount: () => void
}
export const useCountStore = create<CountState>()((set) => ({
    count: 0,
    addCount: () => set((state) => ({ count: state.count + 1 }))
}))