import {extendTheme} from 'native-base';
import primitives from './primitives';
import components from './components';

export default extendTheme({
  components,
  ...primitives,
});
