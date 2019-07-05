import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

import ScreenWithStatusBar from '../../hoc/ScreenWithStatusBar/ScreenWithStatusBar';
import Spinner from '../../components/UI/Spinner/Spinner';
import styles from './Auth.styles';

class Auth extends Component {
  static navigationOptions = {
    headerStyle: {
      display: 'none'
    },
  };

  state = {
    loading: true
  }

  // before navigating to url, if url is the sucessful redirect uri following spotify auth, then exit webview and navigate to PlaylistCreator - otherwise if url is any other address, continue to that url
  onShouldStartLoad = req => {
    if (req.url.startsWith('https://gigwigs-mobile-server.appspot.com/appRedirect')) {
      this.props.navigation.navigate('PlaylistCreator', { authCode: req.url.slice(59) });
      return false;
    } else {
      return true;
    }
  }

  render() {
    let spinner = null;
    if (this.state.loading) {
      spinner = <Spinner />;
    }

    return (
      <ScreenWithStatusBar theme='dark'>
        <View style={styles.container}>
          {spinner}
          <View style={this.state.loading ? styles.hide : styles.webViewContainer}>
            <WebView 
              source={{ uri: this.props.navigation.getParam('url') }}
              onLoad={() => this.setState({ loading: false })}
              onShouldStartLoadWithRequest={this.onShouldStartLoad} />
          </View>
        </View>

        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <View style={styles.backButtonContainer}>
            <Text style={styles.backButtonText}>Back</Text>
          </View>
        </TouchableOpacity>
      </ScreenWithStatusBar>
    );
  }
} 

// Auth.propTypes = {};

export default Auth;