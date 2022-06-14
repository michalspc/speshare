import { extendTheme } from '@chakra-ui/react';
import Button from './components/Button/button';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import styles from './foundations/styles';

const overrides = {
  colors,
  fonts,
  styles,
  components: {
    Button,
  },
};

export default extendTheme(overrides);
