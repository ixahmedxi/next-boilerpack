import { shallow } from 'enzyme'
import Index from '.'

describe('Home Page', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Index />)
    expect(wrapper).toMatchSnapshot()
  })
})
