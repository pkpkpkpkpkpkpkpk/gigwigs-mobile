import { Platform } from 'react-native';

export default {
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 35 : 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#f1be5b'
  }
};