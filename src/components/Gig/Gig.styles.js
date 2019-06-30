import { Dimensions } from 'react-native';

export default {
  imageBackground: {
    width: 0.5 * Dimensions.get('window').width,
    height: 0.5 * Dimensions.get('window').width
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
    color: 'white',
    textAlign: 'center',
    margin: 5,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  }
};