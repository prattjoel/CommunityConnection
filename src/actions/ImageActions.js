'use strict';

import { RNS3 } from 'react-native-aws3';
import Config from 'react-native-config';
import {
    SET_CURRENT_IMAGES,
    SHOW_IMAGE_SELECTOR,
    SELECT_IMAGE_TO_SEND,
    IMAGE_UPLOADED
} from '../constants/ImageTypes';

export const setCurrentImages = imagesFromCameraRoll => {
    const currentImages = imagesFromCameraRoll
    .map(imageInfo => {
        return {
        uri: imageInfo.node.image.uri,
        filename: imageInfo.node.image.filename,
        isSelected: false
    };
});
// debugger;
  return ({
    type: SET_CURRENT_IMAGES,
    payload: currentImages
  });
};

export const toggleImageSelector = showImageSelector => {
    return (
        {
            type: SHOW_IMAGE_SELECTOR,
            payload: showImageSelector
        }
    );
};

export const selectImageToSend = imageToSend => {
    const updatedImage = { ...imageToSend, isSelected: !imageToSend.isSelected };
    return (
        {
            type: SELECT_IMAGE_TO_SEND,
            payload: updatedImage
        }
    );
};

// debugger;
// const key = Config.ACCESS_KEY;
// console.log(key);
// const secret = Config.ACCESS_SECRET;
// console.log(secret);

const imageOptions = {
    keyPrefix: 'message_images/',
    bucket: 'community-connect-image-store',
    region: 'us-east-2',
    accessKey: Config.ACCESS_KEY,
    secretKey: Config.ACCESS_SECRET,
    successActionStatus: 201
};

export const sendSelectedImages = selectedImages => {
        const imageToSend = prepareImageToSend(selectedImages);
        return (dispatch) => {
            sendImage(dispatch, imageToSend);
        };
};

const sendImage = (dispatch, imageFile) => {
        RNS3.put(imageFile, imageOptions).then(response => {
            if (response.status !== 201) {
                console.log(response);
                throw new Error('Image upload failed');
            } else {
                console.log('response from sending image');
                console.log(response);
                console.log('image url:');
                console.log(response.body.postResponse.location);
                // TODO:
                //Add image to firebase database with url
                dispatch({
                    type: IMAGE_UPLOADED
                });
            }
        });
};

const prepareImageToSend = imageToPrepare => {
        const preparedImage = {
            uri: imageToPrepare.uri,
            name: imageToPrepare.filename,
            type: 'image/png'
        };
        return preparedImage;
};
