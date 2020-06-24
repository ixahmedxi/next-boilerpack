import { shallow } from 'enzyme'
import { IconButtons } from './IconButtons.component'

describe('IconButtons component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<IconButtons />)
    expect(wrapper).toMatchSnapshot()
  })
})
