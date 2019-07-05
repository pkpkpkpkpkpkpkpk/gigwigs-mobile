import { Platform } from 'react-native';

export default {
  container: {
    flex: 1,
    backgroundColor: 'black'
  },

  backButtonContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1be5b'
  },

  backButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: 'black'
  },

  webViewContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 35 : 0,
  },

  hide: {
    display: 'none'
  }
}