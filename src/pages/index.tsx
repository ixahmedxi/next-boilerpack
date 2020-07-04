import { Assumptions } from '@components/Home/Assumptions/Assumptions.component'
import { Configuration } from '@components/Home/Configuration/Configuration.component'
import { Description } from '@components/Home/Description/Description.component'
import { Features } from '@components/Home/Features/Features.component'
import { Footer } from '@components/Home/Footer/Footer.component'
import { GettingStarted } from '@components/Home/GettingStarted/GettingStarted.component'
import { Installation } from '@components/Home/Installation/Installation.component'
import { License } from '@components/Home/License/License.component'
import { Motivation } from '@components/Home/Motivation/Motivation.component'
import { TopBar } from '@components/Home/TopBar/TopBar.component'
import { Container } from '@shared/Container/Container.component'
import { Box } from 'theme-ui'

const Index: React.FC = () => {
  return (
    <Container>
      <Box sx={{ py: [2, 4, 6] }}>
        <TopBar />
        <Description />
        <Motivation />
        <Assumptions />
        <Features />
        <Installation />
        <GettingStarted />
        <Configuration />
        <License />
        <Footer />
      </Box>
    </Container>
  )
}

export default Index
