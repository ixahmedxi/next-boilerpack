import { render } from 'test-utils'
import { License } from './License.component'

describe('License component', () => {
  it('matches snapshot', () => {
    const { container } = render(<License />)
    expect(container).toMatchSnapshot()
  })
})
