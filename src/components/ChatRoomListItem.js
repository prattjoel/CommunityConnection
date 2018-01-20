'use-strict';

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class ChatRoomListItem extends Component {
  onPressItem = () => {
    this.props.onPress(this.props.roomKey);
    this.props.updateMessages(this.props.roomKey);
    Actions.pop();
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
