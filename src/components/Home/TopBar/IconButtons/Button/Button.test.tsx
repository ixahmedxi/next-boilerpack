import { render } from 'test-utils'
import { Button } from './Button.component'

describe('TopBar Button Component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Button />)
    expect(container).toMatchSnapshot()
  })
})
