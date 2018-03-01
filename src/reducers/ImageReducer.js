'use strict';

import {
    SET_CURRENT_IMAGES
} from '../constants/ImageTypes';

const initialState = {
    currentImages: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_IMAGES:
            return { ...state, currentImages: action.payload };
        default:
            return state;
    }
};
