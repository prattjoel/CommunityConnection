'use-strict';

import React, { Component } from 'react';
import {
    View,
    Animated,
    Keyboard
} from 'react-native';

export default class KeyboardManager extends Component {
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard
        .addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard
        .addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnMount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow() {
        console.log('Keyboard Shown');
    }
    _keyboardDidHide() {
        console.log('Keyboard Hidden');
    }

  render() {
    return (
        <View
            style={{ flex: 10 }}
        >
            {this.props.children}
        </View>

    );
  }
}
