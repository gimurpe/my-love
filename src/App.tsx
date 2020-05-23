import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Love from './screens/Love';
import configureStore from './state/store';

const { store } = configureStore();
type Props = {};

export default class App extends Component<Props> {
  render = () => {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' component={Love} />
        </Router>
      </Provider>
    );
  };
}
