'use-strict';

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ChatRoomListItem from './ChatRoomListItem';

const data = ['Prayer', 'General', 'Conversation Circle'];

export default class ChatRoomList extends Component {
  componentWillMount() {
      console.log('Chatroom: ');
      console.log(this.props.currentChatRoom);
      // debugger;
  }

  updateChatRoom = (room) => {
    this.props.setChatRoom(room);
  }

  renderChatRoom = ({ item }) => {
    // debugger;
    return (
      <ChatRoomListItem
        onPress={this.updateChatRoom}
        item={item}
        updateMessages={this.props.getMessages}
      >
        {item}
      </ChatRoomListItem>
    );
  }

  render() {
      return (
        <FlatList
          data={data}
          renderItem={this.renderChatRoom}
        />
      );
    }
}
