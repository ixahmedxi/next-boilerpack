import { mount } from 'enzyme'
import { Button } from './Button.component'

describe('TopBar IconButtons Button component', () => {
  it('Matches snapshot', () => {
    const wrapper = mount(<Button>Button</Button>)
    expect(wrapper).toMatchSnapshot()
    wrapper.unmount()
  })
})
