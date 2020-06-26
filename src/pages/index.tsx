import { Description } from '@components/Home/Description/Description.component'
import { TopBar } from '@components/Home/TopBar/TopBar.component'
import { Container } from '@shared/Container/Container.component'
import { Layout } from '@shared/Layout/Layout.component'
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
