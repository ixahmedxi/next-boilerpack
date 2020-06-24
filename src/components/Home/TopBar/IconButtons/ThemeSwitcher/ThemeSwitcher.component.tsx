import { theme } from '@src/theme'
import { Dispatch, SetStateAction } from 'react'
import { FiMoon } from 'react-icons/fi'
import { useColorMode } from 'theme-ui'

export const toggleTheme = (
  mode: string,
  modes: string[],
  changeMode: Dispatch<SetStateAction<string>>
): string => {
  const index = modes.indexOf(mode)
  const next = modes[(index + 1) % modes.length]
  changeMode(next)
  return next
}

export const ThemeSwitcher: React.FC<{
  onClick?: () => string
}> = ({ onClick }) => {
  const [mode, setMode] = useColorMode()
  return (
    <FiMoon
      onClick={() =>
        onClick?.() !== '' ||
        toggleTheme(mode, Object.keys(theme.colors.modes), setMode)
      }
      size="100%"
    />
  )
}
