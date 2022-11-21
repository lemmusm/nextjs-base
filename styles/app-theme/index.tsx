import { createTheme } from '@material-ui/core';
import Overrides from './Overrides';
import { AppPalette, ResourcesDark, ResourcesLight } from './appTheme.types';
import Palette from './Palette';

export const primary = '#556CD6';
export const secondary = '#19857B';
export const accent = '#F2F2F3';

declare module '@material-ui/core' {
  interface Theme {
    app: {
      palette: AppPalette;
      primary: string;
      secondary: string;
      accent: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    app: {
      palette: AppPalette;
      primary: string;
      secondary: string;
      accent: string;
    };
  }
}

const appTheme = createTheme({
  ...Overrides,
  app: {
    ...Palette,
    primary,
    secondary,
    accent,
  },
});

export default appTheme;
