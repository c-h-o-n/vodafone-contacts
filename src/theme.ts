import { extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    'open-sans': {
      400: {
        normal: 'OpenSans-Regular',
      },
      600: {
        normal: 'OpenSans-SemiBold',
      },
      700: {
        normal: 'OpenSans-Bold',
      },
    },
  },
  fonts: {
    heading: 'open-sans',
    body: 'open-sans',
    mono: 'open-sans',
  },
  components: {
    View: {
      defaultProps: {
        flex: 1,
        bg: 'background',
      },
    },

    Button: {
      defaultProps: {
        py: 2,
        px: 6,
        _text: {
          fontWeight: 'semibold',
        },
      },
    },
  },

  colors: {
    background: '#ECECEC',
    primary: '#B73128',
  },
});

// to make custom theme typesafe
type CustomThemeType = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default theme;
