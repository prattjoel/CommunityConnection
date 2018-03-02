'use strict';

import {
    SET_CURRENT_IMAGES,
    SHOW_IMAGE_SELECTOR
} from '../constants/ImageTypes';

const initialState = {
    currentImages: [],
    showImages: false
};

export default (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case SET_CURRENT_IMAGES:
            return { ...state, currentImages: action.payload };
        case SHOW_IMAGE_SELECTOR:
            console.log('showImages');
            console.log(action.payload);
            return { ...state, showImages: action.payload };
        default:
            return state;
    }
};
