import { darken, lighten } from 'polished'
import { Theme } from 'theme-ui'

interface PaletteType {
  primary: string
  secondary: string
  text: string
  background: string
  muted: string
}

interface ITheme extends Theme {
  colors: {
    primary: string
    secondary: string
    text: string
    background: string
    muted: string
    modes: {
      dark: PaletteType
      light: PaletteType
    }
  }
}

export const theme: ITheme = {
  useColorSchemeMediaQuery: true,
  colors: {
    primary: '#657eea',
    secondary: '#37b3ac',
    text: '#111',
    background: '#fff',
    muted: darken(0.1, '#fff'),
    modes: {
      dark: {
        primary: '#657eea',
        secondary: '#37b3ac',
        text: '#fff',
        background: '#111',
        muted: lighten(0.1, '#111')
      },
      light: {
        primary: '#657eea',
        secondary: '#37b3ac',
        text: '#111',
        background: '#fff',
        muted: darken(0.1, '#fff')
      }
    }
  },
  fonts: {
    body:
      'Open Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'Staatliches, Open Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
  },
  fontWeights: {
    body: 400,
    heading: 600
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
      transition: '0.2s ease-out'
    }
  },
  fontSizes: [12, 16, 24, 32, 40, 48, 56, 64],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  sizes: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  lineHeights: [1, 1.5, 2, 2.5, 3],
  // Same breakpoints as bootstrap v5
  breakpoints: ['576px', '768px', '992px', '1200px', '1400px']
}
