import { fireEvent, render } from 'test-utils'
import { ThemeSwitcher, toggleTheme } from './ThemeSwitcher.component'

describe('ThemeSwitcher component', () => {
  it('clicks', () => {
    const { getByTestId } = render(<ThemeSwitcher />)
    const icon = getByTestId('moon-icon')
    fireEvent.click(icon)
  })

  it('cycles through themes', () => {
    const currentMode = 'dark'
    const modes = ['dark', 'light']
    const nextTheme = toggleTheme(currentMode, modes, (value) => value)
    expect(nextTheme).toBe('light')
  })
})
