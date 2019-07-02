import React, { Component } from 'react';
import { View, StatusBar, ScrollView, TouchableHighlight, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
      <TouchableHighlight 
        key={index} 
        onPress={() => this.props.setWhere(location) && this.exitHandler()}>
        <Text 
          style={location === this.props.where ? styles.selected : styles.text}>
          {location}</Text>
      </TouchableHighlight>
    ));

    // only show exit button if a location has already been selected
    let exitSettingsButton = null;
    if (this.props.where) {
      exitSettingsButton = <ExitSettingsButton onPress={this.exitHandler} />;
    }

    return (
      <View style={styles.screen}>
        <StatusBar barStyle="light-content" />
        <ScrollView contentContainerStyle={styles.container}>
          <Logo bright />
          {locationButtons}
          {exitSettingsButton}
        </ScrollView>
      </View>
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