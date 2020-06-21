export const theme = {
  useColorSchemeMediaQuery: true,
  colors: {
    primary: '#657eea',
    secondary: '#37b3ac',
    text: '#111',
    background: '#fff',
    modes: {
      dark: {
        primary: '#657eea',
        secondary: '#37b3ac',
        text: '#fff',
        background: '#111'
      },
      light: {
        primary: '#657eea',
        secondary: '#37b3ac',
        text: '#111',
        background: '#fff'
      }
    }
  },
  fonts: {
    body:
      'Open Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'Staatliches, Open Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
      transition: '0.2s ease-out'
    }
  },
  fontSizes: [12, 16, 24, 32, 40, 48],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  sizes: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  // Same breakpoints as bootstrap v5
  breakpoints: ['576px', '768px', '992px', '1200px', '1400px']
}
