'use-strict';

import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import MessageText from './MessageText';

export default class MessageList extends Component {

  componentWillMount() {
    // Get messages form firebase
    this.props.getMessages();
  }

  // Assign unique key from firebase to each message
  keyExtractor = (item, index) => {
    return this.props.messageKeys[index];
  }

  renderItem = () => {
    // TODO: create custom list item and render user's info along with message content
  };

  renderHeader = () => {
    // TODO: create custom headers for message sections - Date time etc.
  };

  render() {
    return (
      <View style={{ flex: 10, backgroundColor: 'white' }}>
        <FlatList
          data={this.props.messagesToDisplay}
          renderItem={({ item }) => <MessageText timestamp={item.timestamp}>{item.message}</MessageText>}
          keyExtractor={this.keyExtractor}
        />
      </View>

    );
  }
}
