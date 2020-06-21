import { Flex, Text } from 'theme-ui'
import { IconButtons } from './IconButtons/IconButtons.component'

export const TopBar: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
      }}
    >
      <Text
        as="h1"
        sx={{
          fontSize: [2, 3, 4],
          fontFamily: 'heading',
          color: 'primary'
        }}
      >
        {title}
      </Text>
      <IconButtons />
    </Flex>
  )
}
