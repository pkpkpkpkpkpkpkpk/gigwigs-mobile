import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { loadFont } from 'react-native-dynamic-fonts';
import axios from 'axios';

import persistedReducer from './store/persistedReducer';
import * as fonts from './assets/fonts/fonts-base64.js';
import Layout from './hoc/Layout/Layout';
import Settings from './containers/Settings/Settings';

//configure navigator
const MainNavigator = createStackNavigator({
  Home: {screen: Layout},
  Settings: {screen: Settings}
});
const Navigation = createAppContainer(MainNavigator);

// configure redux and persist
let store = createStore(persistedReducer);
let persistor = persistStore(store)

// load custom fonts
loadFont('Montserrat-Regular', fonts.MONTSERRAT_REGULAR, 'ttf');
loadFont('Montserrat-Bold', fonts.MONTSERRAT_BOLD, 'ttf');

// set axios defaults
axios.defaults.baseURL = 'https://gigwigs-server.appspot.com';
axios.defaults.timeout = 10000;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

export default App;