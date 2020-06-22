import { shallow } from 'enzyme'
import { Button } from './Button.component'

describe('TopBar IconButtons Button component', () => {
  it('Matches snapshot', () => {
    const wrapper = shallow(<Button>Button</Button>)
    expect(wrapper).toMatchSnapshot()
  })
})
