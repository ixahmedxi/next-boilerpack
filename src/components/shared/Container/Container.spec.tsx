import { mount } from 'enzyme'
import { matchers } from 'jest-emotion'
import { Container } from './Container.component'

expect.extend(matchers)

describe('Container component', () => {
  it('Matches snapshot when fluid is false', () => {
    const wrapper = mount(<Container fluid={false}>Fluid Container</Container>)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.prop('fluid')).toEqual(false)
    expect(wrapper).toHaveStyleRule('max-width', '100%')
  })

  it('Matches snapshot when fluid is true', () => {
    const wrapper = mount(
      <Container fluid={true}>Not Fluid Container</Container>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.prop('fluid')).toEqual(true)
    expect(wrapper).not.toHaveStyleRule('max-width', '100%')
  })
})
