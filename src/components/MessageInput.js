'use-strict';

import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder='Type Message Here'
        onChangeText={(text) => this.setState({ text })}
      />
    );
  }
}
