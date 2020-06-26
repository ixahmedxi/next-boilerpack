import { render } from 'test-utils'
import { Description } from './Description.component'

describe('Description Component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Description />)
    expect(container).toMatchSnapshot()
  })
})
