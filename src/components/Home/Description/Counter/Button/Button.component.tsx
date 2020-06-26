import { Button } from 'theme-ui'

export const CounterButton: React.FC<{
  onClick: () => { payload: undefined; type: string }
  testId: string
}> = ({ onClick, children, testId }) => {
  return (
    <Button
      onClick={onClick}
      data-testid={testId}
      sx={{
        m: 0,
        p: 0,
        borderRadius: 500,
        outline: 'none',
        width: '32px',
        height: '32px',
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
