'use-strict';

import React, { Component } from 'react';
// import { Keyboard } from 'react-native';
import Messages from './Messages';
import MessageInput from './MessageInput';
import KeyboardManager from './KeyboardManager';

export default class HomePage extends Component {
    // componentWillUnMount() {
    //     Keyboard.dismiss();
    //     console.log('keyboard dismissed');
    // }
  render() {
    return (
      <KeyboardManager style={{ flex: 1 }}>
        <Messages />
        <MessageInput />
    </KeyboardManager>
    );
  }
}
