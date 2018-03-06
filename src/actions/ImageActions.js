'use strict';

import {
    SET_CURRENT_IMAGES,
    SHOW_IMAGE_SELECTOR,
    SELECT_IMAGE_TO_SEND
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
    return (
        {
            type: SELECT_IMAGE_TO_SEND,
            payload: imageToSend
        }
    );
};
