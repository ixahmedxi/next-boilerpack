import { render } from 'test-utils'
import { Layout } from './Layout.component'

describe('Layout component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Layout title="Hello">Layout Component</Layout>)
    expect(container).toMatchSnapshot()
  })
})
