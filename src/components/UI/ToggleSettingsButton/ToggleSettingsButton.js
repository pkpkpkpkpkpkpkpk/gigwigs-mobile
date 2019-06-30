import React from 'react';
import { Image } from 'react-native';
// import PropTypes from 'prop-types';

import settingsIcon from '../../../assets/images/aus-icon.png';
import styles from './ToggleSettingsButton.styles.js';

const ToggleSettingsButton = props => (
  <Image source={settingsIcon} style={styles.image} />
);

// ToggleSettingsButton.propTypes = {};

export default ToggleSettingsButton;