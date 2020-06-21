import { theme } from '@src/theme'
import { FiMoon } from 'react-icons/fi'
import { useColorMode } from 'theme-ui'

export const ThemeSwitcher: React.FC = () => {
  const modes = Object.keys(theme.colors.modes)
  const [mode, setMode] = useColorMode()

  const toggleTheme = (): void => {
    const index = modes.indexOf(mode)
    const next = modes[(index + 1) % modes.length]
    setMode(next)
  }

  return <FiMoon onClick={() => toggleTheme()} size="100%" />
}
