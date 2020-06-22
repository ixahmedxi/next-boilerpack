import { shallow } from 'enzyme'
import { Layout } from './Layout.component'

describe('Layout component', () => {
  it('renders two meta tags', () => {
    const wrapper = shallow(<Layout title="Layout">Layout</Layout>)
    expect(wrapper.find('meta')).toHaveLength(2)
  })

  it('renders meta charset tag', () => {
    const wrapper = shallow(<Layout title="Layout">Layout</Layout>)
    expect(wrapper.find('meta').first().props().charSet).toBe('utf-8')
  })

  it('renders viewport meta tag', () => {
    const wrapper = shallow(<Layout title="Layout">Layout</Layout>)
    expect(wrapper.find('meta').at(1).props().name).toBe('viewport')
    expect(wrapper.find('meta').at(1).props().content).toBe(
      'width=device-width, initial-scale=1.0'
    )
  })
})
