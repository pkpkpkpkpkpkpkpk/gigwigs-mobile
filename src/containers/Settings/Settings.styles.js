import { Platform } from 'react-native';

export default {
  screen: {
    flex: 1,
    backgroundColor: 'black'
  },

  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 35 : 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    padding: 20,
    color: '#f1be5b'
  },

  selected: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    padding: 20,
    color: 'white'
  }
};