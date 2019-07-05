import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ScreenWithStatusBar from '../../hoc/ScreenWithStatusBar/ScreenWithStatusBar';
import Logo from '../../components/UI/Logo/Logo';
import ExitSettingsButton from '../../components/UI/ExitSettingsButton/ExitSettingsButton';
import * as actionTypes from '../../store/actions';
import styles from './Settings.styles.js';

class Settings extends Component {
  static navigationOptions = {
    headerStyle: {
      display: 'none'
    },
  };

  exitHandler = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    const locations = ['Sydney', 'Melbourne', 'Adelaide', 'Perth', 'Brisbane', 'Canberra', 'Hobart'];

    const locationButtons = locations.map( (location, index) => (
      <TouchableOpacity 
        key={index} 
        onPress={() => this.props.setWhere(location) && this.exitHandler()}>
        <Text 
          style={location === this.props.where ? styles.selected : styles.text}>
          {location}</Text>
      </TouchableOpacity>
    ));

    // only show exit button if a location has already been selected
    let exitSettingsButton = null;
    if (this.props.where) {
      exitSettingsButton = <ExitSettingsButton onPress={this.exitHandler} />;
    }

    return (
      <ScreenWithStatusBar theme='dark'>
        <ScrollView contentContainerStyle={styles.container}>
          <Logo bright />
          {locationButtons}
          {exitSettingsButton}
        </ScrollView>
      </ScreenWithStatusBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    where: state.where
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setWhere: where => dispatch({ type: actionTypes.SET_WHERE, payload: where })
  };
}

// Settings.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);