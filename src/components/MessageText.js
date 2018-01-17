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
        <Text
          style={styles.textStyle}
        >
          {props.children}
        </Text>
      </View>
    );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
  },
  textStyle: {
    paddingLeft: 10,
    fontSize: 16
  }
};

export default MessageText;
