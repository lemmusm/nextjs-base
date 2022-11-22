import { AppPalette } from './appTheme.types'

const palette: AppPalette = {
  primary: {
    main: '#556CD6',
  },
  secondary: {
    main: '#19857B',
  },
  background: {
    default: '#F2F2F3',
  },
  white: {
    main: '#FFFFFF',
  },
  green: {
    main: '#10AC84',
  },
  orange: {
    main: '#F39C12',
  },
  navy: {
    light: '#34495E',
    main: '#2C3E50',
  },
  error: {
    main: '#BC0040',
  },
  warning: {
    main: '#FFB036',
    dark: '#B67C20',
    light: '#FFCB7B',
  },
  confirmation: {
    main: '#00B902',
  },
}

const Colors = {
  palette: {
    ...palette,
  },
}

export default Colors
