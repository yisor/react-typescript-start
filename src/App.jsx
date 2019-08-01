import React from 'react';
import { Provider } from 'react-redux';
import Router from './router';

const App = ({ store }) => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App