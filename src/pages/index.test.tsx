import { render } from 'test-utils'
import Index from '.'

describe('Home Page', () => {
  it('matches snapshot', () => {
    const { container } = render(<Index />)
    expect(container).toMatchSnapshot()
  })
})
