type PrimaryColor = {
  light?: string;
  main: string;
  dark?: string;
};

type BackgroundColor = {
  default: string;
  transparent?: string;
};

export type AppPalette = {
  primary: PrimaryColor;
  secondary: PrimaryColor;
  background: BackgroundColor;
  white: PrimaryColor;
  green: PrimaryColor;
  orange: PrimaryColor;
  navy: PrimaryColor;
  error: {
    main: string;
  };
  warning: PrimaryColor;
  confirmation: {
    main: string;
  };
};

/* resources types */

export type ResourcesDark = {
  dataset: string;
  connection: string;
  credential: string;
  dashboard: string;
  insight: string;
  group: string;
  user: string;
};

export type ResourcesLight = ResourcesDark & {
  bpmn: string;
  workflow: string;
  recipe: string;
  notification: string;
};
