'use strict';

import { RNS3 } from 'react-native-aws3';
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

const imageOptions = {
    keyPrefix: 'message_images/',
    bucket: 'community-connect-image-store',
    region: 'us-east-1',
    accessKey: '',
    secretKey: '',
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
                throw new Error('Image upload failed');
            } else {
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
