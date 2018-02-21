'use-strict';

import React, { Component } from 'react';
import {
    Animated,
    Keyboard
} from 'react-native';

export default class KeyboardManager extends Component {
    constructor(props) {
        super(props);

        this.keyboardHeight = new Animated.Value(0);
    }

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

    _keyboardDidShow = (event) => {
        Animated.parallel(
            [Animated.timing(
                this.keyboardHeight,
                {
                    duration: event.duration,
                    toValue: event.endCoordinates.height
                }
            )]
        ).start();
        console.log('Keyboard Shown');
    }
    _keyboardDidHide = (event) => {
        Animated.parallel(
            [Animated.timing(
                this.keyboardHeight,
                {
                    duration: event.duration,
                    toValue: 0
                }
            )]
        ).start();
        console.log('Keyboard Hidden');
    }

  render() {
    return (
        <Animated.View
            style={{ flex: 1, paddingBottom: this.keyboardHeight }}
        >
            {this.props.children}
        </Animated.View>

    );
  }
}
