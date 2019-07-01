import { Dimensions } from 'react-native';

export default {
  container: {
    // minHeight: Dimensions.get('window').height - 140,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start'
  },

  errorContainer: {
    minHeight: Dimensions.get('window').height - 140,
    justifyContent: 'center'
  },

  errorMessage: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#f1be5b',
    textAlign: 'center'
  }
};