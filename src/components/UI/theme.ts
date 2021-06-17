const theme = {
  palette: {
    color: {
      white: '#fff',
      lightGrey: '#f6f6f8',
      grey: '#ccc',
    },
    main: {
      primary: '#122331',
      secondary: '#00474a',
      ternary: '#93a0ad',
      error: '#ff695e',
    },
  },
  variables: {
    boldFontWeight: '600',
    borderRadius: '5px',
    inputFontSize: '15px',
  },
};

export default theme;

type ThemeType = typeof theme;

declare module 'styled-components' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/naming-convention */
  export interface DefaultTheme extends ThemeType {}
}
