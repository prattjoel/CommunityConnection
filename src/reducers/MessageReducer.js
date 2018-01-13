'use strict';
import { MESSAGE_TEXT_CHANGED } from '../actions/types';

export default (state = { messageText: '' }, action) => {
  switch (action.type) {
    case MESSAGE_TEXT_CHANGED:
      // debugger;
      return { ...state, messageText: action.payload };
    default:
      return (state);
  }
};
