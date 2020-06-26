import { render } from 'test-utils'
import { IconButtons } from './IconButtons.component'

describe('IconButtons component', () => {
  it('matches snapshot', () => {
    const { container } = render(<IconButtons />)
    expect(container).toMatchSnapshot()
  })
})
