import { render } from 'test-utils'
import { Motivation } from './Motivation.component'

describe('Docs component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Motivation />)
    expect(container).toMatchSnapshot()
  })
})
