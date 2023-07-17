const baseStyle = () => ({
  borderRadius: 'md',
});

const variants = {
  base: {
    bg: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    _text: {
      color: 'black',
      fontSize: 14,
    },
    _pressed: {
      opacity: 0.8,
    },
    _disabled: {
      opacity: 0.5,
    },
  },
};

const sizes = {
  lg: {
    _text: {
      fontSize: 'lg',
    },
  },
  md: {
    _text: {
      fontSize: 'md',
    },
  },
  sm: {
    _text: {
      fontSize: 'sm',
    },
  },
  xs: {
    _text: {
      fontSize: 'xs',
    },
  },
};

const defaultProps = {
  variant: 'base',
  size: 'sm',
};

export default {
  sizes,
  baseStyle,
  variants,
  defaultProps,
};
