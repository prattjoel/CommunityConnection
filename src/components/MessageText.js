'use-strict';

import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

const MessageText = (props) => {
    return (
      <View style={styles.containerStyle}>
        <Image
          source={require('../assets/profilePlaceholder.png')}
          style={{ width: 20, height: 20 }}
        />
        <View>
          <Text style={styles.timestampStyle}>
            {props.timestamp}
          </Text>
          <Text
            style={styles.textStyle}
          >
            {props.children}
          </Text>
        </View>
      </View>
    );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#d3d3d3'
  },
  textStyle: {
    paddingLeft: 10,
    fontSize: 16
  },
  timestampStyle: {
    paddingLeft: 10,
    fontSize: 10
  }
};

export default MessageText;
