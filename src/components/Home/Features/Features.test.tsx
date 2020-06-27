import { render } from 'test-utils'
import { Features } from './Features.component'

describe('Docs component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Features />)
    expect(container).toMatchSnapshot()
  })
})
