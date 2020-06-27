import { Box, Text } from 'theme-ui'

export const Section: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <Box sx={{ mt: [4, 4, 5] }}>
      <Text
        as="h1"
        sx={{ color: 'secondary', fontFamily: 'heading', fontSize: [2, 3], pb: [1, 2, 2] }}
      >
        {title}
      </Text>
      {children}
    </Box>
  )
}
