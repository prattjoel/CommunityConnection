'use-strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import Messages from './Messages';
import MessageInput from './MessageInput';

export default class HomePage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Messages />
        <MessageInput />
      </View>
    );
  }
}
