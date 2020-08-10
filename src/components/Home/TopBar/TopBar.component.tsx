/* @jsx jsx */
import LogoLight from '@assets/logo-light.svg'
import Logo from '@assets/logo.svg'
import { Flex, jsx, useColorMode } from 'theme-ui'
import { IconButtons } from './IconButtons/IconButtons.component'

export const TopBar: React.FC = () => {
  const [mode] = useColorMode()
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
      }}>
      <img src={mode === 'dark' ? LogoLight : Logo} alt='logo' />
      <IconButtons />
    </Flex>
  )
}
