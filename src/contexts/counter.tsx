import { createContext, ReactNode, useContext, useState } from 'react'

interface ICounterContext {
  count: number
  increment: () => void
  decrement: () => void
}

export const CounterContext = createContext<ICounterContext>({
  count: 0,
  increment: () => null,
  decrement: () => null
})

interface CounterProviderProps {
  children: ReactNode
}

export const CounterProvider = ({ children }: CounterProviderProps): JSX.Element => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = (): ICounterContext => useContext(CounterContext)
