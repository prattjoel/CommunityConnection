'use strict';

import { connect } from 'react-redux';
import {
    setCurrentImages,
    toggleImageSelector,
    selectImageToSend
} from '../actions/ImageActions';
import ImageSelector from '../components/chat/ImageSelector';


const mapStateToProps = state => {
    const { currentImages, showImages, selectedImage } = state.imagesFromCR;
    return (
        {
            currentImages,
            showImages,
            selectedImage
            // selectedImages
        }
    );
};

const mapDispatchToProps = dispatch => {
    return (
        {
            setCurrentImages: (currentImages) => {
                dispatch(setCurrentImages(currentImages));
            },
            showImageSelector: (showImages) => {
                dispatch(toggleImageSelector(showImages));
            },
            selectImageToSend: (imageToSend) => {
                dispatch(selectImageToSend(imageToSend));
            }
        }
    );
};

const ImagesFromCR = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageSelector);

export default ImagesFromCR;
