import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
// import PropTypes from 'prop-types';

import crossIcon from '../../../assets/images/white-cross.png';
import styles from './ExitSettingsButton.styles.js';

const ExitSettingsButton = props => (
  <TouchableOpacity 
    onPress={props.onPress}
    style={styles.container}>
    <Image source={crossIcon} style={styles.image} />
  </TouchableOpacity>
);

// ExitSettingsButton.propTypes = {};

export default ExitSettingsButton;