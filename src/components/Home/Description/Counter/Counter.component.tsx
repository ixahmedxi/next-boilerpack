import { useCounter } from '@contexts/counter'
import { Flex, Text } from 'theme-ui'
import { CounterButton } from './Button/Button.component'

export const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounter()
  return (
    <Flex
      sx={{
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}>
      <CounterButton dataTestId='increment' onClick={() => increment()}>
        +
      </CounterButton>
      <Text as='p' sx={{ display: 'inline-block', mx: 2, my: 0, p: 0, fontSize: [0, 0, 1] }}>
        Count: {count}
      </Text>
      <CounterButton dataTestId='decrement' onClick={() => decrement()}>
        -
      </CounterButton>
    </Flex>
  )
}
