'use-strict';

import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import ChatRoomListItem from './ChatRoomListItem';

const data = ['Prayer', 'General', 'Conversation Circle'];

export default class ChatRoomList extends Component {
  componentWillMount() {
      console.log('Chatroom: ');
      console.log(this.props.currentChatRoom);
  }

  render() {
      return (
        <FlatList
          data={data}
          renderItem={(item) => <ChatRoomListItem> {item.item} </ChatRoomListItem>}
        />
      );
    }
}
