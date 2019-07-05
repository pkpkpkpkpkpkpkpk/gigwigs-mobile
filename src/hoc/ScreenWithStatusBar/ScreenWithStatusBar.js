import React from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ScreenWithStatusBar.styles.js';

const ScreenWithStatusBar = props => {
  if (props.theme === 'dark') {
    return (
      <View style={styles.containerDark}>
        <StatusBar barStyle='light-content' backgroundColor='black' />
        {props.children}
      </View>
    );
  } else if (props.theme === 'light') {
    return (
      <View style={styles.containerLight}>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        {props.children}
      </View>
    );
  }
}

ScreenWithStatusBar.propTypes = {
  theme: PropTypes.string.isRequired
};

export default ScreenWithStatusBar;