import { Container as ThemUiContainer } from 'theme-ui'

export const Container: React.FC<{ fluid?: boolean }> = ({ children, fluid }) => {
  return (
    <ThemUiContainer
      as="div"
      data-testid="container"
      sx={{
        maxWidth:
          fluid === true ? undefined : ['100%', '540px', '720px', '960px', '1140px', '1320px'],
        m: '0 auto',
        px: 2
      }}
    >
      {children}
    </ThemUiContainer>
  )
}
