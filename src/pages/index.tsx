import { Description, TopBar } from '@components/Home'
import { Container, Layout } from '@shared'
import { Box } from 'theme-ui'

const Index: React.FC = () => {
  return (
    <Layout title="Next Boilerpack">
      <Container>
        <Box sx={{ pt: [2, 4, 6] }}>
          <TopBar title="nextjs boilerpack" />
          <Description />
        </Box>
      </Container>
    </Layout>
  )
}

export default Index
