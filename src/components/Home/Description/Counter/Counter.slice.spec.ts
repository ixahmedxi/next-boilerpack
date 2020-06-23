import {
  counterReducer,
  decrement,
  increment,
  initialState
} from './Counter.slice'

describe('Counter Slice', () => {
  it('returns the correct initial state', () => {
    const state = initialState
    const result = counterReducer(undefined, { type: undefined })
    expect(result).toEqual(state)
  })

  it('increments the counter', () => {
    const reducer = counterReducer(initialState, increment())
    const state = { counter: reducer }
    expect(state.counter).toEqual(initialState + 1)
  })

  it('decrements the counter', () => {
    const reducer = counterReducer(initialState, decrement())
    const state = { counter: reducer }
    expect(state.counter).toEqual(initialState - 1)
  })
})
