'use-strict';

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';


export default class ChatRoomListItem extends Component {
  onPressItem = () => {
    this.props.onPress(this.props.roomKey);
    this.props.updateMessages(this.props.roomKey);
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
