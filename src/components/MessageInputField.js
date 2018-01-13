'use-strict';

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import SendButton from './SendButton';

export default class MessageInputField extends Component {
  componentWillMount() {
    this.props.getMessages();
  }

  componentWillReceiveProps(nextProps) {
    console.log('messages after loading');
    console.log(nextProps.messages);
  }

  onMessageChange(text) {
    this.props.updateMessageText(text);
  }

  onSendButtonPressed() {
    const { message } = this.props;

    if (message !== '') {
      this.props.sendMessageText(message);
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
        />
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
