import { extendTheme } from 'native-base';

const ComponentStyle = () => {
  return extendTheme({
    components: {
      Text: {
        baseStyle: {
          color: 'dark.100',
          fontWeight: '500',
        },
      },
      Icon: {
        baseStyle: {
          color: 'dark.300',
        },
        defaultProps: {
          size: '1.5rem',
        },
      },
      Button: {
        defaultProps: {
          _hover: {
            backgroundColor: 'coolGray.200',
          },
        },
      },
    },
    fontConfig: {
      Inter: {
        300: {
          normal: 'Inter-Thin',
        },
        400: {
          normal: 'Inter-Light',
        },
        500: {
          normal: 'Inter-Regular',
        },
        600: {
          normal: 'Inter-SemiBold',
        },
      },
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
      mono: 'Inter',
    },
  });
};

export default ComponentStyle;
