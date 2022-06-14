import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';
import getBgBySize from './getSizes';

const Button: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    solid: (props: StyleFunctionProps) => ({
      borderRadius: '10px',
      bg: `${props.isDisabled ? 'disabled' : getBgBySize(props.size)}`,
      color: 'white',
      _hover: {
        bg: 'linear-gradient(100deg, #5C40DD 0%, #B100FF 100%)',
      },
      _disabled: {
        bgColor: 'disabled',
        opacity: 1,
        color: '#515265',
      },
    }),
    outline: (props: StyleFunctionProps) => ({
      border: '1px solid',
      borderColor: `${props.isDisabled ? 'disabled' : 'primary.500'}`,
      borderRadius: '50px',
      color: 'white',
      _hover: {
        bg: 'primary.500',
      },
    }),
  },
  sizes: {
    xs: {
      h: '35px',
    },
    sm: {
      h: '39px',
    },
    md: {
      h: '45px',
    },
    lg: {
      h: '49px',
      padding: '0 36px 0 36px',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

export default Button;
