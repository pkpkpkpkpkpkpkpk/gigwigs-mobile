import React from 'react';
import { TouchableOpacity, ImageBackground, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import gigImage from '../../assets/images/gig-image.jpg';
import notAvailableCross from '../../assets/images/red-cross.png';
import styles from './Gig.styles.js';

const Gig = props => {
  let etc = '';
  if (props.artist.length > 35) {
    etc = '...';
  }

  // displays a red cross to indicate that the artist wasn't found on spotify
  let notAvailable = null;
  if (!props.onSpotify) {
    notAvailable = <Image source={notAvailableCross} style={styles.notAvailableCross} />;
  }

  return (
    <TouchableOpacity onPress={props.onSpotify ? () => props.toggleSelectGig(props.id) : null}>
      <ImageBackground 
        source={props.image ? { uri: props.image } : gigImage} 
        style={props.selected ? styles.imageBackground : [styles.unselected, styles.imageBackground]}>
        <View style={styles.container}>
          <Text style={styles.text}>{props.artist.slice(0, 35) + etc}</Text>
          <Text style={[styles.text, styles.venueText]}>{props.venue}</Text>
          {notAvailable}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

Gig.propTypes = {
  id: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  image: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  toggleSelectGig: PropTypes.func.isRequired
};

export default Gig;