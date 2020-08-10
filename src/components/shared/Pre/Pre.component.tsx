/* @jsx jsx */
import { jsx } from 'theme-ui'

export const Pre: React.FC = ({ children }) => {
  return (
    <pre
      sx={{
        backgroundColor: 'muted',
        py: [1, 2],
        px: [2, 3],
        borderRadius: 10,
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word'
      }}>
      <code sx={{ lineHeight: 2, color: 'text', fontSize: [0, 1] }}>{children}</code>
    </pre>
  )
}
