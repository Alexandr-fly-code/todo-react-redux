import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import I18n from 'redux-i18n';
import { translations } from './utils/translations'

import {store, persistor } from './redux/store';

import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter >
    <PersistGate persistor={persistor}>
      <I18n translations={translations} useReducer={true}>
          <App/>
      </I18n>    
    </PersistGate>
  </BrowserRouter>
</Provider>
, document.getElementById('root'));

