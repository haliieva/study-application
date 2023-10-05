const baseStyle = () => {
  return {
    fontSize: 'sm',
    paddingLeft: 2,
    _disabled: {
      color: 'grey',
    },
    _text: {
      color: 'white',
    },
  };
};

const sizes = {
  '2xl': {fontSize: '2xl'},
  xl: {fontSize: 'xl'},
  lg: {fontSize: 'lg'},
  md: {fontSize: 'md'},
  sm: {fontSize: 'sm'},
  xs: {fontSize: 'xs'},
};

const defaultProps = {
  color: 'white',
  size: 'sm',
  autoCapitalize: 'none',
  autoCorrect: false,
};

export default {
  baseStyle,
  defaultProps,
  sizes,
};
