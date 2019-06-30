import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Layout from './src/hoc/Layout/Layout';
import styles from './App.styles';

axios.defaults.baseURL = 'https://gigwigs-server.appspot.com';
axios.defaults.timeout = 10000;

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Layout />
    </ScrollView>
  );
}

export default App;