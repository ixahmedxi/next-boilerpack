import { FiGithub } from 'react-icons/fi'
import { Box, Flex, IconButton, Link, Text } from 'theme-ui'
import { ThemeSwitcher } from '..'

export const TopBar: React.FC<{ title: string; githubLink: string }> = ({
  title,
  githubLink
}) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
      }}
    >
      <Text
        as="h1"
        sx={{
          fontSize: [2, 3, 4],
          fontFamily: 'heading',
          color: 'primary'
        }}
      >
        {title}
      </Text>
      <Box>
        <ThemeSwitcher />
        <IconButton
          sx={{
            width: [5, null, 6],
            height: [5, null, 6],
            cursor: 'pointer',
            outline: 'none'
          }}
        >
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'text' }}
          >
            <FiGithub size="100%" />
          </Link>
        </IconButton>
      </Box>
    </Flex>
  )
}
