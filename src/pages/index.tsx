import { Assumptions } from '@components/Home/Assumptions/Assumptions.component'
import { Description } from '@components/Home/Description/Description.component'
import { Features } from '@components/Home/Features/Features.component'
import { Installation } from '@components/Home/Installation/Installation.component'
import { Motivation } from '@components/Home/Motivation/Motivation.component'
import { TopBar } from '@components/Home/TopBar/TopBar.component'
import { Container } from '@shared/Container/Container.component'
import { Layout } from '@shared/Layout/Layout.component'
import { Box } from 'theme-ui'

const Index: React.FC = () => {
  return (
    <Layout title="Next Boilerpack">
      <Container>
        <Box sx={{ py: [2, 4, 6] }}>
          <TopBar title="nextjs boilerpack" />
          <Description />
          <Motivation />
          <Assumptions />
          <Features />
          <Installation />
        </Box>
      </Container>
    </Layout>
  )
}

export default Index
