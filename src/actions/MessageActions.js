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
export const sendMessage = (message, currentChatRoom) => {
  const { currentUser } = firebase.auth();
  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  const date = new Date();
  const timestamp = date.toLocaleTimeString('en-us', timeOptions);
  const messageInfo = {
    user: currentUser.uid,
    message,
    timestamp,
    name: currentUser.displayName
 };

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

  return (dispatch) => {
    firebase.database().ref(`/chat_rooms/${currentChatRoom}`)
      .on('value', snapshot => {
        dispatch({
          type: GET_MESSAGE_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
