'use strict';

import {
    SET_CURRENT_IMAGES
} from '../constants/ImageTypes';

export const setCurrentImages = currentImages => {
  return ({
    type: SET_CURRENT_IMAGES,
    payload: currentImages
  });
};
