import { Container } from '@shared/Container/Container.component'
import { Layout } from '@shared/Layout/Layout.component'
import { Box, Flex, Text } from 'theme-ui'

const NotFound: React.FC = () => {
  return (
    <Layout title="404 Not Found">
      <Container>
        <Flex
          sx={{
            height: '100vh',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box>
            <Text as="h1" sx={{ fontSize: [5, 6, 7], textAlign: 'center' }}>
              <span role="img" aria-label="Cry emoji">
                😢
              </span>{' '}
            </Text>
            <Text as="h1" sx={{ color: 'primary', fontSize: [2, 3, 4], textAlign: 'center' }}>
              Something isn&#39;t right...
            </Text>
            <Text as="p" sx={{ textAlign: 'center', fontSize: [0, 1, 2], paddingTop: 2 }}>
              An Error of 404 Occured
            </Text>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export default NotFound
