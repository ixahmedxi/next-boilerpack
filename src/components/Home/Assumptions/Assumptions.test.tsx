import { render } from 'test-utils'
import { Assumptions } from './Assumptions.component'

describe('Assumptions component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Assumptions />)
    expect(container).toMatchSnapshot()
  })
})
