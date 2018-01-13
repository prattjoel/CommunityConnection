'use strict';
import firebase from 'firebase';
import {
  MESSAGE_TEXT_CHANGED,
  MESSAGE_SENT,
  GET_MESSAGE_SUCCESS
} from './types';

export const messageChanged = text => {
  return ({
    type: MESSAGE_TEXT_CHANGED,
    payload: text
  });
};

export const sendMessage = (message) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/messages`)
      .push({ message })
      .then(() => {
        console.log('message sent');
        dispatch({
          type: MESSAGE_SENT
        });
      });
  };
};

export const getMessages = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/messages`)
      .on('value', snapshot => {
        dispatch({
          type: GET_MESSAGE_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
