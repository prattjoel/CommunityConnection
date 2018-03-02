'use strict';

import { connect } from 'react-redux';
import {
    setCurrentImages,
    toggleImageSelector
 } from '../actions/ImageActions';
import ImageSelector from '../components/chat/ImageSelector';


const mapStateToProps = state => {
    const { currentImages, showImages } = state.imagesFromCR;
    return (
        {
            currentImages,
            showImages
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
        }
        }
    );
};

const ImagesFromCR = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageSelector);

export default ImagesFromCR;
