const typographyDefaults = {
  fontFamily: ['Barlow', 'Helvetica', 'sans-serif'].join(','),
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  fontWeight: 'normal',
};

const components = {
  styleOverrides: typographyDefaults,
};

const Overrides = {
  typography: typographyDefaults,
  components: {
    ...components,
  },
};

export default Overrides;
