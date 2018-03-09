'use strict';

import {
    SET_CURRENT_IMAGES,
    SHOW_IMAGE_SELECTOR,
    SELECT_IMAGE_TO_SEND,
    IMAGE_UPLOADED
    // UNSELECT_IMAGE_TO_SEND
} from '../constants/ImageTypes';

const initialState = {
    currentImages: [],
    showImages: false,
    selectedImage: {},
    photoUrl: ''
};

export default (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case SET_CURRENT_IMAGES:
            return { ...state, currentImages: action.payload };
        case SHOW_IMAGE_SELECTOR:
        // console.log('showImages');
        // console.log(action.payload);
            return { ...state, showImages: action.payload };
        case SELECT_IMAGE_TO_SEND:
        // debugger;
            {
                // const selectedImages = state.selectedImages;
                const index = state.currentImages.map((image) => image.filename)
                .indexOf(action.payload.filename);
                if (index === -1) {
                    return state;
                }
                    const updatedImages = state.currentImages;
                    updatedImages[index] = action.payload;
                    // const currentSelectedImages = selectedImages.splice(index, 1);
                    return {
                        ...state,
                        currentImages: updatedImages,
                        selectedImage: action.payload
                    };
                // selectedImages.push(action.payload);
                // return { ...state, selectedImages };
            }
        case IMAGE_UPLOADED:
            // debugger;
            return { ...initialState, photoUrl: action.payload };
        default:
            return state;
    }
};
