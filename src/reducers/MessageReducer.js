'use strict';
import {
  MESSAGE_TEXT_CHANGED,
  MESSAGE_SENT
} from '../actions/types';

export default (state = { messageText: '' }, action) => {
  switch (action.type) {
    case MESSAGE_TEXT_CHANGED:
      // debugger;
      return { ...state, messageText: action.payload };
    case MESSAGE_SENT:
      return { ...state, messageText: '' };
    default:
      return (state);
  }
};
