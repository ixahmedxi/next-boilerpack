import { mount } from 'enzyme'
import { ThemeProvider } from 'theme-ui'
import { ThemeSwitcher, toggleTheme } from './ThemeSwitcher.component'

describe('ThemeSwitcher component', () => {
  const mockTheme = {
    colors: {
      background: 'black',
      modes: {
        dark: {
          background: 'black'
        },
        light: {
          background: 'white'
        }
      }
    }
  }

  const mockClick = jest.fn()

  const wrapper = mount(
    <ThemeProvider theme={mockTheme}>
      <ThemeSwitcher onClick={mockClick} />
    </ThemeProvider>
  )

  it('renders a moon icon', () => {
    expect(wrapper.find('FiMoon').exists()).toBeTruthy()
  })

  it('clicks', () => {
    wrapper.find('FiMoon').simulate('click')
    expect(mockClick.mock.calls.length).toBe(1)
  })

  it('toggles the theme when clicked', () => {
    const nextTheme = toggleTheme('dark', ['dark', 'light'], (value) => value)
    expect(nextTheme).toBe('light')
    const nextTheme2 = toggleTheme(
      nextTheme,
      ['dark', 'light'],
      (value) => value
    )
    expect(nextTheme2).toBe('dark')
  })
})
