import { render } from 'test-utils'
import { Footer } from './Footer.component'

describe('Footer Component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
})
