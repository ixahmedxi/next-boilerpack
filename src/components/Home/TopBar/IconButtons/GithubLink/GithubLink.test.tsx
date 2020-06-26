import { render } from 'test-utils'
import { GithubLink } from './GithubLink.component'

describe('Github Link Button', () => {
  it('matches snapshot', () => {
    const { container } = render(<GithubLink />)
    expect(container).toMatchSnapshot()
  })
})
