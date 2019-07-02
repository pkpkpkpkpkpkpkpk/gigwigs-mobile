import React, { Component } from 'react';
import { View } from 'react-native';
// import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

import Spinner from '../UI/Spinner/Spinner';
import styles from './Auth.styles';

class Auth extends Component {
  state = {
    loading: true
  }

  render() {
    let spinner = null;
    if (this.state.loading) {
      spinner = <Spinner />;
    }

    return (
      <View style={styles.container}>
        {spinner}
        <View style={this.state.loading ? styles.hide : styles.webViewContainer}>
          <WebView 
            source={{ uri: this.props.navigation.getParam('url') }}
            onLoad={() => this.setState({ loading: false })}/>
        </View>
      </View>
    );
  }
} 

// Auth.propTypes = {};

export default Auth;