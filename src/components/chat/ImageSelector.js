'use-strict';

import React, { Component } from 'react';
import {
    Modal,
    Text,
    View
} from 'react-native';
import Button from '../common/Button';

export default class ImageSelector extends Component {
    // componentDidMount() {
    //     // debugger;
    //     console.log('showImages in componentDidMount');
    //     console.log(this.props.showImages);
    // }
    onPressDoneButton = () => {
        this.props.showImageSelector(!this.props.showImages);
    }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.showImages}
            >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Button
                        onPress={this.onPressDoneButton.bind(this)}
                    >
                        Done
                    </Button>
                </View>
            </Modal>
            );
        }
    }
