import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
// import PropTypes from 'prop-types';

import crossIcon from '../../../assets/images/white-cross.png';
import styles from './ExitSettingsButton.styles.js';

const ExitSettingsButton = props => (
  <TouchableHighlight 
    onPress={props.onPress}
    style={styles.container}>
    <Image source={crossIcon} style={styles.image} />
  </TouchableHighlight>
);

// ExitSettingsButton.propTypes = {};

export default ExitSettingsButton;