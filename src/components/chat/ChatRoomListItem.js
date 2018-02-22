'use-strict';

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';


export default class ChatRoomListItem extends Component {
  onPressItem = () => {
    this.props.onPress(this.props.roomKey);
    this.props.getMessages(this.props.roomKey);

    // Navigate to Messages screen
    this.props.navigation.navigate('Messages');
  }
  render() {
    return (
        <TouchableOpacity
          onPress={this.onPressItem}
        >
          <Text>{this.props.children}</Text>
        </TouchableOpacity>
      );
    }
}
