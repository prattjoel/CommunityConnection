'use strict';
import { MESSAGE_TEXT_CHANGED } from './types';

export const messageChanged = text => {
  // debugger;
  return ({
    type: MESSAGE_TEXT_CHANGED,
    payload: text
  });
};
