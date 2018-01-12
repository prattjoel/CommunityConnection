'use-strict';

import React, { Component } from 'react';
import { Text } from 'react-native';
import MessageList from './MessageList';

export default class HomePage extends Component {
  render() {
    return (
      <MessageList />
    );
  }
}
