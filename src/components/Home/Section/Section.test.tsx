import { render } from 'test-utils'
import { Section } from './Section.component'

describe('Docs component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Section title='Section' />)
    expect(container).toMatchSnapshot()
  })
})
