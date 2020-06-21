import { theme } from '@src/theme'
import { FiMoon } from 'react-icons/fi'
import { IconButton, useColorMode } from 'theme-ui'

export const ThemeSwitcher: React.FC = () => {
  const modes = Object.keys(theme.colors.modes)
  const [mode, setMode] = useColorMode()

  const toggleTheme = (): void => {
    const index = modes.indexOf(mode)
    const next = modes[(index + 1) % modes.length]
    setMode(next)
  }

  return (
    <IconButton
      sx={{
        width: [5, null, 6],
        height: [5, null, 6],
        cursor: 'pointer',
        outline: 'none'
      }}
      onClick={() => toggleTheme()}
    >
      <FiMoon size="100%" />
    </IconButton>
  )
}
