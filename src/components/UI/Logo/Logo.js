import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import darkImage from '../../../assets/images/dark-long-hair.png';
import brightImage from '../../../assets/images/bright-long-hair.png';
import styles from './Logo.styles';

// pass props.bright for bright logo, otherwise defaults to dark logo
const Logo = props => (
  <Image source={props.bright ? brightImage : darkImage} style={styles.image} />
);

Logo.propTypes = {
  bright: PropTypes.bool
};

export default Logo;