import { IconButton } from 'theme-ui'

export const Button: React.FC = ({ children }) => {
  return (
    <IconButton
      sx={{
        width: [5, null, 6],
        height: [5, null, 6],
        cursor: 'pointer',
        outline: 'none'
      }}>
      {children}
    </IconButton>
  )
}
