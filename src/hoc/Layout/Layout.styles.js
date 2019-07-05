import { Platform } from 'react-native';

export default {
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 35 : 0,
    backgroundColor: 'black'
  }
};