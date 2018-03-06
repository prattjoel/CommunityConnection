'use-strict';

import React, { Component } from 'react';
import {
    FlatList,
    Image,
    View,
    TouchableHighlight
} from 'react-native';

export default class PhotoList extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('PhotoList: currentImages after selection made');
        console.log(this.props.currentImages);
        console.log('nextProps');
        console.log(nextProps);
    }

    onPress = (item) => {
        // console.log('image pressed');
        // console.log('current images onPress');
        // console.log(this.props.currentImages);
        // console.log(this.props.selectedImages);
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
        const opacityValue = (item.isSelected ? 0.5 : 1.0);
        // const newStyle = { ...styles.imageStyle, opacity: opacityValue };
        const newStyle = { opacity: opacityValue };
        return newStyle;
        // const index = this.props.selectedImages.map((image) => image.filename)
        // .indexOf(item.filename);
        //
        // if (index !== -1) {
        //     return 0.5;
        // }
        // return 1;
    }

    renderItem = ({ item }) => {
        // debugger;
        // const updatedStyle = this.highlightImage(item);
        return (
            <TouchableHighlight
                onPress={this.onPress.bind(this, item)}
                style={this.highlightImage(item)}
                // activeOpacity={0.5}
            >
                    <Image
                        source={{ uri: item.uri }}
                        // style={styles.imageStyle}
                        style={styles.imageStyle}
                        // style={{ ...styles.imageStyle, opacity: (item.isSelected ? 0.5 : 1.0) }}
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
                        extraData={this.props.selectedImage}
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
