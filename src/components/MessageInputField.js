'use-strict';

import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class MessageInputField extends Component {
  onMessageChange(text) {
    this.props.updateMessageText(text);
  }

  render() {
    return (
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder='Type Message Here'
        onChangeText={this.onMessageChange.bind(this)}
        value={this.props.message}
      />
    );
  }
}
