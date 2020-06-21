import { Container as ThemUiContainer } from 'theme-ui'

export const Container: React.FC = ({ children }) => {
  return (
    <ThemUiContainer
      sx={{
        maxWidth: ['100%', '540px', '720px', '960px', '1140px', '1320px'],
        m: '0 auto',
        px: 2
      }}
    >
      {children}
    </ThemUiContainer>
  )
}
