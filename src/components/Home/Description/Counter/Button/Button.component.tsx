import { Button } from 'theme-ui'

export const CounterButton: React.FC<{
  onClick: () => { payload: undefined; type: string }
  dataTestId?: string
}> = ({ onClick, children, dataTestId }) => {
  return (
    <Button
      data-testid={dataTestId}
      onClick={onClick}
      as="button"
      sx={{
        m: 0,
        p: 0,
        borderRadius: 500,
        outline: 'none',
        width: 4,
        height: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
    >
      {children}
    </Button>
  )
}
