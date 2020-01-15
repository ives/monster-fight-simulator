import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MonsterSimulator from './MonsterSimulator';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
          <MonsterSimulator />
      </Provider>
    );
  }
}
