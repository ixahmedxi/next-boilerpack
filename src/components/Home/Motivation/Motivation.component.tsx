import { P } from '@shared/P/P.component'
import { Section } from '../Section/Section.component'

export const Motivation: React.FC = () => {
  return (
    <Section title="Motivation">
      <P>
        Next.js is an amazing framework and I use it on the daily basis but the default boilerplate
        did not fulfil my needs after some time, it became time consuming to start a new project
        since it needed me to add lots of things to it like linting and testing before actually
        starting the development process. So I decided to create a boilerplate that has all of the
        features that I like and use to start projects fast and for other people to use it as well.
      </P>
    </Section>
  )
}
