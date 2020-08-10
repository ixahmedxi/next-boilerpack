/* @jsx jsx */
import { P } from '@components/shared/P/P.component'
import React from 'react'
import { jsx, Link } from 'theme-ui'
import { Section } from '../Section/Section.component'

export const Features: React.FC = () => {
  const items = [
    {
      name: 'Theme UI',
      link: 'https://theme-ui.com/'
    },
    {
      name: 'React Icons',
      link: 'https://react-icons.github.io/react-icons/'
    },
    {
      name: 'Jest',
      link: 'https://jestjs.io/'
    },
    {
      name: 'React Testing Library',
      link: 'https://testing-library.com/'
    },
    {
      name: 'ESLint',
      link: 'https://eslint.org/'
    },
    {
      name: 'Prettier',
      link: 'https://prettier.io/'
    },
    {
      name: 'Husky',
      link: 'https://github.com/typicode/husky'
    },
    {
      name: 'Lint Staged',
      link: 'https://github.com/okonet/lint-staged'
    },
    {
      name: 'Next SEO',
      link: 'https://github.com/garmeeh/next-seo'
    },
    {
      name: 'Next Images',
      link: 'https://github.com/twopluszero/next-images'
    }
  ]
  return (
    <Section title='Features'>
      <P>
        The boilerplate comes with many libraries and tools set up out of the box to extend
        React&#39;s feature set, some of the tools included in the boilerplate are:
      </P>
      <ul sx={{ m: 0, pt: [1, 1, 2] }}>
        {items.map(item => (
          <li key={item.name}>
            <Link
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: 'primary',
                display: 'inline-block',
                textDecoration: 'none',
                borderBottom: '1px solid',
                borderColor: 'primary',
                fontSize: [0, 0, 1],
                pt: [0, 0, 1]
              }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
