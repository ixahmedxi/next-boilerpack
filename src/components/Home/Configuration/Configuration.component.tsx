import { P } from '@src/components/shared/P/P.component'
import { Section } from '../Section/Section.component'

export const Configuration: React.FC = () => {
  return (
    <Section title="Configuration">
      <P>
        The boilerplate was made on the fact that the chance for someone to be using the same set of
        things as I am is very small and that is why I made it so that removing or replacing any of
        the pre-configured libs installed is not confusing nor complicated. <br /> <br />
        The configuration for ESLint, Jest, Prettier, Husky, lint-staged can all be found in their
        respective files in the root directory of the boilerplate except husky & lint-staged where
        their configuration is in the package.json file. <br /> <br /> The redux store, theme file
        and test setup files can be found in the main src folder so if you do not want redux for
        example deleting the file and the Provider component from the _app file will do just that.
        <br /> <br />
        The theme file (src/theme.ts) is responsible for making sure the design of the website is
        consistent in spacing and sizing as well as making the ability to have multiple color themes
        for the website really easy to implement. All of the ways for using the theme file and
        theme-ui overall can be found in there docs. Also I know most people are used to
        styled-components or emotion but personally since I have tried theme-ui I haven&#39;t looked
        back for the simple fact that it handles responsiveness really well.
        <br /> <br />I Have included a Container component in the shared folder that resembles the
        .container class in bootstrap to give the option of having that nice wrapping around the
        pages. It is not a must use obviously but I personally always use it.
      </P>
    </Section>
  )
}
