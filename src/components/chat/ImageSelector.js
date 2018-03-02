'use-strict';

import React, { Component } from 'react';
import {
    Modal,
    View,
} from 'react-native';
import Button from '../common/Button';
import PhotoList from './PhotoList';

export default class ImageSelector extends Component {
    componentDidMount() {
        // debugger;
        // console.log('showImages in componentDidMount');
        // console.log(this.props.showImages);
        console.log('currentImages in componentDidMount ImageSelector: ');
        console.log(this.props.currentImages);
    }
    onPressDoneButton = () => {
        this.props.showImageSelector(!this.props.showImages);
    }

    onShowImages = () => {
        console.log('currentImages in onShowImages of ImageSelector: ');
        console.log(this.props.currentImages);
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.showImages}
                onShow={this.onShowImages.bind(this)}
            >
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <PhotoList
                        currentImages={this.props.currentImages}
                    />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Button
                            onPress={this.onPressDoneButton.bind(this)}
                        >
                            Done
                        </Button>
                    </View>
                </View>
            </Modal>
            );
        }
    }
