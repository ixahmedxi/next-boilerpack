import { FiGithub } from 'react-icons/fi'
import { Link } from 'theme-ui'

export const GithubLink: React.FC = () => {
  return (
    <Link
      href="https://github.com/ixahmedxi/next-boilerpack"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ color: 'text' }}
    >
      <FiGithub size="100%" />
    </Link>
  )
}
