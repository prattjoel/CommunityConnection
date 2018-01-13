'use-strict';

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import SendButton from './SendButton';

export default class MessageInputField extends Component {
  onMessageChange(text) {
    this.props.updateMessageText(text);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <TextInput
          style={styles.textInputStyle}
          placeholder='Type Message Here'
          onChangeText={this.onMessageChange.bind(this)}
          value={this.props.message}
        />
        <SendButton />
      </View>
    );
  }
}

const styles = {
  textInputStyle: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    paddingLeft: 5,
    flex: 3,
    alignSelf: 'flex-end'
  },
  containerStyle: {
      flex: 1,
      flexDirection: 'row',
      paddingBottom: 5
  }
};
