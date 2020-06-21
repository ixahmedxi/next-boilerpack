import { Counter, TopBar } from '@components/Home'
import { Container, Layout } from '@shared'
import { Box, Flex, Text } from 'theme-ui'

const Index: React.FC = () => {
  return (
    <Layout title="Next Boilerpack">
      <Container>
        <Box sx={{ pt: [2, 4, 6] }}>
          <TopBar
            title="nextjs boilerpack"
            githubLink="http://github.com/ixahmedxi/next-boilerpack"
          />
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
        </Box>
      </Container>
    </Layout>
  )
}

export default Index
