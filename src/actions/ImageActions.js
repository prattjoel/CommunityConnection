'use strict';

import {
    SET_CURRENT_IMAGES,
    SHOW_IMAGE_SELECTOR,
    SELECT_IMAGE_TO_SEND
} from '../constants/ImageTypes';

export const setCurrentImages = currentImages => {
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
