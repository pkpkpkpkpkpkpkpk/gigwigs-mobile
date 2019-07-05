import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
// import PropTypes from 'prop-types';

import settingsIcon from '../../../assets/images/aus-icon.png';
import styles from './ToggleSettingsButton.styles.js';

const ToggleSettingsButton = props => (
  <TouchableOpacity 
    onPress={() => props.navigation.navigate('Settings')} 
    style={styles.container}>
    <Image source={settingsIcon} style={styles.image} />
  </TouchableOpacity>
);

// ToggleSettingsButton.propTypes = {};

export default ToggleSettingsButton;