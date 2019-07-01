import { Dimensions } from 'react-native';

export default {
  imageBackground: {
    width: 0.5 * Dimensions.get('window').width,
    height: 0.5 * Dimensions.get('window').width
  },

  unselected: {
    opacity: 0.5
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 5
  },

  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 5,
    textShadowColor: 'black',
    textShadowRadius: 5
  },

  venueText: {
    fontSize: 16,
    color: '#f1be5b'
  }
};