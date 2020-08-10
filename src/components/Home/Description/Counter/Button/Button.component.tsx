import { Button } from 'theme-ui'

export const CounterButton: React.FC<{
  onClick: () => void
  dataTestId?: string
}> = ({ onClick, children, dataTestId }) => {
  return (
    <Button
      data-testid={dataTestId}
      onClick={onClick}
      as='button'
      sx={{
        m: 0,
        p: 0,
        outline: 'none',
        width: [3, 4],
        height: [3, 4],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}>
      {children}
    </Button>
  )
}
