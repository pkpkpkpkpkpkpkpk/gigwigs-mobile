import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import ScreenWithStatusBar from '../ScreenWithStatusBar/ScreenWithStatusBar';
import Logo from '../../components/UI/Logo/Logo';
import DateSelector from '../../containers/DateSelector/DateSelector';
import ToggleSettingsButton from '../../components/UI/ToggleSettingsButton/ToggleSettingsButton';
import Gigs from '../../containers/Gigs/Gigs';
import CreatePlaylistButton from '../../components/CreatePlaylistButton/CreatePlaylistButton';
import styles from './Layout.styles';

class Layout extends Component {
  static navigationOptions = {
    headerStyle: {
      display: 'none'
    },
  };

  render() {
    return (
      <ScreenWithStatusBar theme='dark'>
        <ScrollView style={styles.container}>
          <Logo />
          <DateSelector />
          <ToggleSettingsButton navigation={this.props.navigation} />
          <Gigs />
          <CreatePlaylistButton navigation={this.props.navigation} />
        </ScrollView>
      </ScreenWithStatusBar>
    );
  }
}

export default Layout;