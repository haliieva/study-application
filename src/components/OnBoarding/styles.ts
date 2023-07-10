import {StyleSheet} from 'react-native';
import {beige, blue} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: beige,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexBasis: 100,
    marginVertical: 16,
  },
  image: {
    height: '80%',
    width: '100%',
    resizeMode: 'contain',
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
