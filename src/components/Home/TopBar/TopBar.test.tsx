import { render } from 'test-utils'
import { TopBar } from './TopBar.component'

describe('TopBar Component', () => {
  it('matches snapshot', () => {
    const { container } = render(<TopBar title="topbar" />)
    expect(container).toMatchSnapshot()
  })
})
