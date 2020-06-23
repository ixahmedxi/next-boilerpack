import { mount, shallow } from 'enzyme'
import { CounterButton } from './Button.component'

describe('Counter Button Component', () => {
  it('matches snapshot', () => {
    const click = jest.fn()
    const wrapper = mount(<CounterButton onClick={click}>Button</CounterButton>)
    expect(wrapper).toMatchSnapshot()
  })

  it('onClick prop runs when component is clicked', () => {
    const onClick = jest.fn()
    const wrapper = shallow(
      <CounterButton onClick={onClick}>Button</CounterButton>
    )
    wrapper.simulate('click')
    expect(onClick.mock.calls.length).toBe(1)
  })
})
