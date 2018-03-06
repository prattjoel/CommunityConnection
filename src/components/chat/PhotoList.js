'use-strict';

import React, { Component } from 'react';
import {
    FlatList,
    Image,
    View,
    TouchableHighlight
} from 'react-native';

export default class PhotoList extends Component {

    componentWillReceiveProps() {
        console.log('selected images after selection made');
        console.log(this.props.selectedImages);
    }

    onPress = (item) => {
        console.log('image pressed');
        console.log('selected images onPress');
        console.log(this.props.selectedImages);
        // const imageInfo = {
        //     uri: item.node.image.uri,
        //     filename: item.node.image.filename,
        //     opacity: 0.5
        // };

        this.props.selectImageToSend(item);
    }

    keyExtractor = (item) => {
        return item.filename;
    }

    highlightImage = (item) => {
        // debugger;
        const index = this.props.selectedImages.map((image) => image.filename)
        .indexOf(item.filename);

        if (index !== -1) {
            return 0.5;
        }
        return 1;
    }

    renderItem = ({ item }) => {
        return (
            <TouchableHighlight
                onPress={this.onPress.bind(this, item)}
                // activeOpacity={0.5}
            >
                    <Image
                        source={{ uri: item.uri }}
                        // style={styles.imageStyle}
                        style={{ ...styles.imageStyle, opacity: this.highlightImage(item) }}
                    />
                </TouchableHighlight>
            );
        }

        render() {
            return (
                <View style={{ flex: 10, paddingTop: 20 }}>
                    <FlatList
                        // style={{ flexDirection: 'column', borderWidth: 5, borderColor: 'black' }}
                        data={this.props.currentImages}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        numColumns={3}
                        // horizontal
                    />
                </View>
            );
        }
    }

    const styles = {
        imageStyle: {
            width: 100,
            height: 100,
            marginLeft: 2,
            marginTop: 2,
            // borderRadius: 5,
            // borderWidth: 1,
            // borderColor: '#979797'
        }
    };
