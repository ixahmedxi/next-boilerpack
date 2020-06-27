import { render } from 'test-utils'
import { Installation } from './Installation.component'

describe('Docs component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Installation />)
    expect(container).toMatchSnapshot()
  })
})
