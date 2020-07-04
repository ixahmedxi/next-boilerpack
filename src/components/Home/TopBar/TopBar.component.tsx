/* @jsx jsx */

import { Flex, jsx } from 'theme-ui'
import { IconButtons } from './IconButtons/IconButtons.component'
import Logo from './logo.svg'

export const TopBar: React.FC = () => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
      }}
    >
      <Logo sx={{ fill: 'text' }} />
      <IconButtons />
    </Flex>
  )
}
