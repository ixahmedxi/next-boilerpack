import { shallow } from 'enzyme'
import { TopBar } from './TopBar.component'

describe('TopBar component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<TopBar title="TopBar" />)
    expect(wrapper).toMatchSnapshot()
  })
})
