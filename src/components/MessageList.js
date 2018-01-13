'use-strict';

import React, { Component } from 'react';
import { SectionList, Text } from 'react-native';

const dataSource = [
  { data:
    [{ val: 'Hello Handsome', key: '1' }, { val: 'Your a good looking guy', key: '2' }],
    key: 'Young Frank' },
  { data:
    [{ val: 'You waste our film', key: '1' }, { val: 'Call me back 7 o clock', key: '2' }],
    key: 'Rush hr' },
];

export default class MessageList extends Component {
  renderItem = (item) => {
    // console.log(item);
    return (
      <Text>
        {item.item.val}
      </Text>
    );
  };

  renderHeader = (item) => {
    return (
      <Text style={{ fontSize: 24 }}>
        {item.section.key}
      </Text>
    );
  };

  render() {
    return (
      <SectionList
        sections={dataSource}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderHeader}
        // keyExtractor={(item) => item.val}
      />
    );
  }
}
