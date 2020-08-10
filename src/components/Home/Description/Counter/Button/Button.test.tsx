import { theme } from '@theme'
import { cleanup, fireEvent, render } from 'test-utils'
import { CounterButton } from './Button.component'

describe('Counter Button component', () => {
  afterEach(cleanup)

  it('runs onClick prop when clicked', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <CounterButton dataTestId='button' onClick={onClick}>
        Button
      </CounterButton>
    )
    fireEvent.click(getByTestId('button'))
    expect(onClick.mock.calls.length).toBe(1)
  })

  it('renders the correct styling', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <CounterButton dataTestId='button' onClick={onClick}>
        Button
      </CounterButton>
    )
    expect(getByTestId('button')).toHaveStyleRule('width', String(theme.space[3]) + 'px')
    expect(getByTestId('button')).toHaveStyleRule('height', String(theme.space[3]) + 'px')
  })
})
