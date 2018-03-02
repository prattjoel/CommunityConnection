'use-strict';

import React, { Component } from 'react';
import {
    Modal,
    Text
} from 'react-native';

export default class ImageSelector extends Component {
    // componentDidMount() {
    //     // debugger;
    //     console.log('showImages in componentDidMount');
    //     console.log(this.props.showImages);
    // }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.showImages}
            >
                    <Text>
                        Image Selector
                    </Text>
            </Modal>
            );
        }
    }
