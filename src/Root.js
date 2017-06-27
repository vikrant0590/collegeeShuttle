import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/create';
import AppRouter from './routes';

const store = createStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    );
  }
}