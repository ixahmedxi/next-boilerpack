import { render } from 'test-utils'
import { Pre } from './Pre.component'

describe('Pre component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Pre>Code here</Pre>)
    expect(container).toMatchSnapshot()
  })
})
