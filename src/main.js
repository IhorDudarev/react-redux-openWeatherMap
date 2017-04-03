import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import App from './App.js';

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('container')
);