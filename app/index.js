import React from 'react';
import { generateStore } from './store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { App } from './components/app';

let store = generateStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  $('.js-app')[0]
);
