'use-strict';

import React from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';

const ChatRoomListItem = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPressItem}
    >
      <Text>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default ChatRoomListItem;
