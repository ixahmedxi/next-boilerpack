import { P } from '@shared/P/P.component'
import { Section } from '../Section/Section.component'

export const Assumptions: React.FC = () => {
  return (
    <Section title='Assumptions'>
      <P>
        This boilerplate assumes that you have knowledge about React, Next.js, Redux, Jest and
        react-testing-library. This is not a beginner friendly boilerplate. For a beginner friendly
        boilerplate, the default Next.js one will be a better choice.
      </P>
    </Section>
  )
}
