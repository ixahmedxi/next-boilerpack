import { shallow } from 'enzyme'
import { GithubLink } from './GithubLink.component'

describe('GithubLink component', () => {
  let wrapper = shallow(<GithubLink />)

  beforeEach(() => {
    wrapper = shallow(<GithubLink />)
  })

  it('renders the correct styling', () => {
    expect(wrapper.find('ForwardRef').props().sx).toEqual({ color: 'text' })
  })

  it('sets icon size to 100%', () => {
    expect(wrapper.find('FiGithub').prop('size')).toBe('100%')
  })

  it('links to the correct github link', () => {
    expect(wrapper.find('ForwardRef').props().href).toBe(
      'https://github.com/ixahmedxi/next-boilerpack'
    )
  })
})
