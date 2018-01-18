'use-strict';

import React from 'react';
import { Text, FlatList } from 'react-native';

const data = ['Prayer', 'General', 'Conversation Circle'];

const ChatRoomList = () => {
  return (
    <FlatList
      data={data}
      renderItem={(item) => <Text> {item.item} </Text>}
    />
  );
};


export default ChatRoomList;
