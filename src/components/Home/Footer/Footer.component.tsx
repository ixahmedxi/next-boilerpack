import { FaHeart } from 'react-icons/fa'
import { Flex, Link, Text } from 'theme-ui'

export const Footer: React.FC = () => {
  return (
    <Flex sx={{ alignItems: 'center', justifyContent: 'center', pt: [4, 6, 8] }}>
      <Text sx={{ color: 'primary', fontSize: [0, 0, 1] }}>
        Made with <FaHeart /> by{' '}
        <Link
          sx={{ color: 'primary' }}
          href='https://twitter.com/ixahmedxii'
          target='_blank'
          rel='noopener noreferrer'>
          Ahmed Elsakaan
        </Link>
      </Text>
    </Flex>
  )
}
