import { P } from '@components/shared/P/P.component'
import { Pre } from '@components/shared/Pre/Pre.component'
import { Section } from '../Section/Section.component'

export const GettingStarted: React.FC = () => {
  return (
    <Section title="Getting Started">
      <P>
        To get started using this boilerplate, it is adviced to delete all of the components created
        to showcase this boilerplate that way you can start from a clean point, following the
        instructions below this can be done easily.
      </P>
      <Pre>
        $ rm -rf src/components/Home
        <br />
        $ rm -rf src/components/shared/P
        <br />$ rm -rf src/components/shared/Pre
      </Pre>
      <P>
        You should then modify the src/pages/index.tsx file to have an empty component so that you
        do not get errors about not finding components, the empty component would look like this.
      </P>
      <Pre>
        {`const Index: React.FC = () => {
  return (
    <Layout>
      <Container>
        <h1>Hello World</h1>
      </Container>
    </Layout>
  )
}

export default Index`}
      </Pre>
    </Section>
  )
}
