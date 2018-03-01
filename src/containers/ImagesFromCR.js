'use strict';

import { connect } from 'react-redux';
import { setCurrentImages } from '../actions/ImageActions';
import ImageSelector from '../components/chat/ImageSelector';


const mapStateToProps = state => {
    return (
        {
            currentImages: state.currentImages
        }
    );
};

const mapDispatchToProps = dispatch => {
        return (
            {
            setCurrentImages: (currentImages) => {
                dispatch(setCurrentImages(currentImages));
            }
        }
    );
};

const ImagesFromCR = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageSelector);

export default ImagesFromCR;
