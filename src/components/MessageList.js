'use-strict';

import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

export default class MessageList extends Component {

  componentWillMount() {
    // Get messages form firebase database
    this.props.getMessages();
  }

  // Assigns the message content as the key for each list item
    // TODO: Assign each message a unique key
  keyExtractor = (item) => item.message;

  renderItem = () => {
    // TODO: create custom list item and render user's info along with message content
  };

  renderHeader = () => {
    // TODO: create custom headers for message sections - Date
  };

  render() {
    return (
      <FlatList
        data={this.props.messagesToDisplay}
        renderItem={({ item }) => <Text>{item.message}</Text>}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}
