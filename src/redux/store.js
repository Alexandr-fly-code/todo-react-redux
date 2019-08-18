import {createStore} from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist'
import rootReducer from './reducers/reducer';


const enhancer = composeWithDevTools();

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);

export default { store, persistor };