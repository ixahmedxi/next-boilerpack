import { CounterProvider } from '@contexts/counter'
import { P } from '@shared/P/P.component'
import { Flex } from 'theme-ui'
import { Counter } from './Counter/Counter.component'

export const Description: React.FC = () => {
  return (
    <CounterProvider>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 2
        }}>
        <P esx={{ flex: 2 }}>
          A TypeScript based React Next.js, Redux & ThemeUI boilerplate to make starting a new
          project fast{' '}
          <span role='img' aria-label='Emojis'>
            🤩 🥳
          </span>
        </P>
        <Counter />
      </Flex>
    </CounterProvider>
  )
}
