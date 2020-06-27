/* @jsx jsx */
import { P } from '@shared/P/P.component'
import { jsx } from 'theme-ui'
import { Section } from '../Section/Section.component'

export const Installation: React.FC = () => {
  return (
    <Section title="Installation">
      <P>
        To get started using next-boilerpack, firstly clone the repository and install the
        dependencies using your terminal by following the instructions below. {'<project-name> '}
        refers to the name of the project you are creating so replace it with whatever you want your
        project to be named.
      </P>
      <pre
        sx={{
          backgroundColor: 'muted',
          py: [1, 2],
          px: [2, 3],
          borderRadius: 10,
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word'
        }}
      >
        <code sx={{ lineHeight: 2, color: 'text', fontSize: [0, 1] }}>
          $ git clone https://github.com/ixahmedxi/next-boilerpack {'<project-name>'}
          <br />$ cd {'<project-name>'}
          <br />$ npm install
        </code>
      </pre>
      <P esx={{ opacity: 0.5, fontWeight: 'heading', fontStyle: 'italic' }}>
        You can use yarn install instead of npm install of course
      </P>
    </Section>
  )
}
