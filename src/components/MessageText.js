'use-strict';

import React from 'react';
import {
  View,
  Text
} from 'react-native';

const MessageText = (props) => {
    return (
      <View>
        <Text
          style={styles.textStyle}
        >
          {props.children}
        </Text>
      </View>
    );
};

const styles = {
  textStyle: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 16
  }
};

export default MessageText;
