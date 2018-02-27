'use-strict';

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import SendButton from './SendButton';

export default class MessageInputField extends Component {
  componentWillMount() {
    console.log('chat room in message input field');
    console.log(this.props.currentChatRoom);
  }

  onMessageChange(text) {
    this.props.updateMessageText(text);
  }

  onSendButtonPressed() {
    const { message, currentChatRoom } = this.props;

    if (message !== '') {
      this.props.sendMessageText(message, currentChatRoom);
    } else {
      console.log('No message included');
    }
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
        <SendButton
          onPress={this.onSendButtonPressed.bind(this)}
        >
            Send
        </SendButton>
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
      paddingBottom: 5,
      backgroundColor: 'white'
      // borderWidth: 5,
      // borderColor: 'red'
  }
};