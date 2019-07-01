import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;