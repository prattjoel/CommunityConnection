'use-strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default class HomePage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MessageList />
        <MessageInput />
      </View>
    );
  }
}
