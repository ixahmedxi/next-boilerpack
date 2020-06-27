import { render } from 'test-utils'
import { GettingStarted } from './GettingStarted.component'

describe('Getting Started Component', () => {
  it('matches snapshot', () => {
    const { container } = render(<GettingStarted />)
    expect(container).toMatchSnapshot()
  })
})
