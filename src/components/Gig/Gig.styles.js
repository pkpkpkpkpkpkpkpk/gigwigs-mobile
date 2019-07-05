import { Dimensions } from 'react-native';

// calculates side length of container
const dim = Dimensions.get('window');
let sideLength = dim.width / 2;
// if screen orientation is initially landscape
if (dim.width > dim.height) {
  sideLength = dim.height / 2;
}

export default {
  imageBackground: {
    width: sideLength,
    height: sideLength
  },

  unselected: {
    opacity: 0.25
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