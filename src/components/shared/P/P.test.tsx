import { render } from 'test-utils'
import { P } from './P.component'

describe('Docs component', () => {
  it('matches snapshot', () => {
    const { container } = render(<P>P Component</P>)
    expect(container).toMatchSnapshot()
  })
})
