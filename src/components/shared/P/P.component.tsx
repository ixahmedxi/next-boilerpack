import { SxStyleProp, Text } from 'theme-ui'

export const P: React.FC<{ esx?: SxStyleProp }> = ({ children, esx }) => (
  <Text as='p' sx={{ ...esx, lineHeight: 2, fontSize: [0, 0, 1] }}>
    {children}
  </Text>
)
