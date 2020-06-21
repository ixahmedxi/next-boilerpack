import { Flex, Text } from 'theme-ui'
import { Counter } from './Counter/Counter.component'

export const Description: React.FC = () => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        mt: 2
      }}
    >
      <Text
        as="p"
        sx={{
          lineHeight: 1.5,
          fontSize: [0, 1],
          flex: 1,
          display: 'inline-block'
        }}
      >
        An opinionated TypeScript based React Next.js, Redux and ThemeUI
        boilerplate that ensures type safety and testability.
      </Text>
      <Counter />
    </Flex>
  )
}
