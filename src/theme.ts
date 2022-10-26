import { extendTheme } from 'native-base';

// LATER add dark mode
const theme = extendTheme({
  components: {
    View: {
      defaultProps: {
        flex: 1,
        bg: 'background',
      },
    },
  },
  colors: {
    background: '#ECECEC',
    primary: {
      400: '#B73128',
    },
  },
});

// to make custom theme typesafe
type CustomThemeType = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default theme;
