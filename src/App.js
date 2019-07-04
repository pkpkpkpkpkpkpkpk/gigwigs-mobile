import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import { loadFont } from 'react-native-dynamic-fonts';
import axios from 'axios';

import persistedReducer from './store/persistedReducer';
import * as fonts from './assets/fonts/fonts-base64.js';
import Layout from './hoc/Layout/Layout';
import Settings from './containers/Settings/Settings';
import Auth from './components/Auth/Auth';
import PlaylistCreator from './containers/PlaylistCreator/PlaylistCreator';

//configure navigation
const FirstLaunchStack = createStackNavigator({
  Settings: {screen: Settings},
  Home: {screen: Layout},
  Auth: {screen: Auth},
  PlaylistCreator: {screen: PlaylistCreator}
});
const MainStack = createStackNavigator({
  Home: {screen: Layout},
  Auth: {screen: Auth},
  PlaylistCreator: {screen: PlaylistCreator},
  Settings: {screen: Settings}
});
const FirstLaunchNavigation = createAppContainer(FirstLaunchStack);
const MainNavigation = createAppContainer(MainStack);

// configure redux and persist
let store = createStore(persistedReducer);
let persistor = persistStore(store)

// load custom fonts
loadFont('Montserrat-Regular', fonts.MONTSERRAT_REGULAR, 'ttf');
loadFont('Montserrat-Bold', fonts.MONTSERRAT_BOLD, 'ttf');

// set axios defaults
axios.defaults.baseURL = 'https://gigwigs-mobile-server.appspot.com';
axios.defaults.timeout = 10000;

class App extends Component {
  state = {
    navigation: null
  }

  componentDidMount() {
    this.checkIfFirstLaunch()
  }

  // forces user to select a location on first launch
  checkIfFirstLaunch = async () => {
    const hasLaunched = await AsyncStorage.getItem('hasLaunched');
    if (hasLaunched === null) {
      AsyncStorage.setItem('hasLaunched', 'true');
      this.setState({ navigation: <FirstLaunchNavigation /> });
    } else {
      this.setState({ navigation: <MainNavigation /> });
    }
  }

  render() {  
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {this.state.navigation}
        </PersistGate>
      </Provider>
    );
  }
}

export default App;