import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexBasis: 100,
    marginVertical: 16,
  },
  image: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
    backgroundColor: 'green'
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#493d8a',
    marginHorizontal: 8,
  },
});
