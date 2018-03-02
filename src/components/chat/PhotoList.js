'use-strict';

import React, { Component } from 'react';
import {
    FlatList,
    Image,
    View
} from 'react-native';

export default class PhotoList extends Component {

    keyExtractor = (item) => {
        return item.node.image.filename;
    }

    renderItem = ({ item }) => {
        return (
            <Image
                source={{ uri: item.node.image.uri }}
                style={styles.imageStyle}
            />
        );
    }

    render() {
        return (
            <View style={{ flex: 10, borderWidth: 5, borderColor: 'red', paddingTop: 10 }}>
                <FlatList
                    // style={{ flexDirection: 'column', borderWidth: 5, borderColor: 'black' }}
                    data={this.props.currentImages}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    // numColumn={3}
                    horizontal
                />
            </View>
        );
    }
}

const styles = {
    imageStyle: {
        width: 100,
        height: 100,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#979797'
    }
};
