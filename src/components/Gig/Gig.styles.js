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
    overflow: 'hidden'
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