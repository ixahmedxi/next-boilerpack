import { Box } from 'theme-ui'
import { Button } from './Button/Button.component'
import { GithubLink } from './GithubLink/GithubLink.component'
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher.component'

export const IconButtons: React.FC = () => {
  return (
    <Box>
      <Button>
        <ThemeSwitcher />
      </Button>
      <Button>
        <GithubLink />
      </Button>
    </Box>
  )
}
