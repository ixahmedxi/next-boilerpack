import { render } from 'test-utils'
import { Configuration } from './Configuration.component'

describe('Configuration Component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Configuration />)
    expect(container).toMatchSnapshot()
  })
})
