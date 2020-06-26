import { useStoreDispatch, useStoreSelector } from '@src/store'
import { Flex, Text } from 'theme-ui'
import { CounterButton } from './Button/Button.component'
import { decrement, increment } from './Counter.slice'

export const Counter: React.FC = () => {
  const counter = useStoreSelector((state) => state.counter)
  const dispatch = useStoreDispatch()
  return (
    <Flex
      sx={{
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}
    >
      <CounterButton dataTestId="increment" onClick={() => dispatch(increment())}>
        +
      </CounterButton>
      <Text as="p" sx={{ display: 'inline-block', mx: 2, my: 0, p: 0 }}>
        Count: {counter}
      </Text>
      <CounterButton dataTestId="decrement" onClick={() => dispatch(decrement())}>
        -
      </CounterButton>
    </Flex>
  )
}
