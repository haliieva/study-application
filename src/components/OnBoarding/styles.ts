import {StyleSheet} from 'react-native';
import {blue} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonRow: {
    flexBasis: 100,
    marginVertical: 16,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    color: blue,
    textAlign: 'center',
    marginHorizontal: 30,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: blue,
    marginHorizontal: 8,
  },
});
