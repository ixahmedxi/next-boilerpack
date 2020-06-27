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
          fontSize: [0, 0, 1],
          flex: 2,
          display: 'inline-block'
        }}
      >
        A TypeScript based React Next.js, Redux & ThemeUI boilerplate to make starting a new project
        fast{' '}
        <span role="img" aria-label="Emojis">
          🤩 🥳
        </span>
      </Text>
      <Counter />
    </Flex>
  )
}
