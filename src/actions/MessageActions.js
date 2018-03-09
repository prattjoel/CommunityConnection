'use strict';
import firebase from 'firebase';
import {
  MESSAGE_TEXT_CHANGED,
  MESSAGE_SENT,
  GET_MESSAGE_SUCCESS
} from './types';

// Set text for message input
export const messageChanged = text => {
  return ({
    type: MESSAGE_TEXT_CHANGED,
    payload: text
  });
};

// Send massages to database
export const sendMessage = (type, content, currentChatRoom) => {
    // TODO: handle image messages

  const { currentUser } = firebase.auth();
  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  const date = new Date();
  const timestamp = date.toLocaleTimeString('en-us', timeOptions);
  const messageInfo = {
    user: currentUser.uid,
    timestamp,
    name: currentUser.displayName
 };

 messageInfo[type] = content;

  return (dispatch) => {
    firebase.database().ref(`/chat_rooms/${currentChatRoom}`)
      .push(messageInfo)
      .then(() => {
        console.log('message sent');
        dispatch({
          type: MESSAGE_SENT
        });
      });
  };
};

// Retrieve messages from database based on the current chat room.
export const getMessages = (currentChatRoom) => {
  // const { currentUser } = firebase.auth();

  // Supply default in case chat room is empty
  const defaultMessage = {
    key: {
      message: 'default message',
      name: 'name',
      timestamp: '00:00',
      user: 'default user'
    }
  };

  return (dispatch) => {
    firebase.database().ref(`/chat_rooms/${currentChatRoom}`)
      .on('value', snapshot => {
        const snap = snapshot.val();
        if (snap) {
          callDispatch(dispatch, snap);
        } else {
          // debugger;
          callDispatch(dispatch, defaultMessage);
        }
      });
  };
};

const callDispatch = (dispatch, messageValue) => {
  dispatch({
    type: GET_MESSAGE_SUCCESS,
    payload: messageValue
  });
};
