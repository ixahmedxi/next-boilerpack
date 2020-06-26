import { cleanup, fireEvent, render } from 'test-utils'
import { Counter } from './Counter.component'

describe('Counter component', () => {
  afterEach(cleanup)

  it('increments and decrements the counter', () => {
    const { getByTestId, getByText } = render(<Counter />)
    const incrementButton = getByTestId('increment')
    const decrementButton = getByTestId('decrement')
    fireEvent.click(incrementButton)
    getByText('Count: 1')
    fireEvent.click(decrementButton)
    getByText('Count: 0')
  })
})
