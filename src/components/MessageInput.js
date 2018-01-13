'use-strict';

import { connect } from 'react-redux';
import {
  messageChanged,
  sendMessage,
  getMessages
} from '../actions/MessageActions';
import MessageInputField from './MessageInputField';

const mapStateToProps = state => {
  return (
    { message: state.messages.messageText },
    { messages: state.messages.messagesToShow }
  );
};

const mapDispatchToProps = dispatch => {
  return (
    {
      updateMessageText: text => {
      dispatch(messageChanged(text));
    },
      sendMessageText: message => {
        dispatch(sendMessage(message));
      },
      getMessages: () => {
        dispatch(getMessages());
      }
  });
};

const MessageInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInputField);

export default MessageInput;
