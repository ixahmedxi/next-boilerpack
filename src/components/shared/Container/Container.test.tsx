import { theme } from '@src/theme'
import { cleanup, render } from 'test-utils'
import { Container } from './Container.component'

describe('Container component', () => {
  afterEach(cleanup)

  it('renders children', () => {
    const { getByText } = render(<Container>Container component</Container>)
    getByText('Container component')
  })

  it('renders with correct styling', () => {
    const { getByTestId } = render(<Container>Container component</Container>)
    expect(getByTestId('container')).toHaveStyleRule('padding-left', `${theme.space[2]}px`)
    expect(getByTestId('container')).toHaveStyleRule('padding-right', `${theme.space[2]}px`)
    expect(getByTestId('container')).toHaveStyleRule('margin', '0 auto')
    expect(getByTestId('container')).toHaveStyleRule('max-width', '100%')
  })

  it('matches snapshot', () => {
    const { container } = render(<Container>Container component</Container>)
    expect(container).toMatchSnapshot()
  })

  it('matches snapshot when fluid is true', () => {
    const { container } = render(<Container fluid>Container component</Container>)
    expect(container).toMatchSnapshot()
  })
})
