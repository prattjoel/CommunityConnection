'use-strict';

import { connect } from 'react-redux';
import {
  messageChanged,
  sendMessage
} from '../actions/MessageActions';
import MessageInputField from './MessageInputField';

const mapStateToProps = state => {
  return (
    { message: state.messages.messageText }
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
      }
  });
};

const MessageInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInputField);

export default MessageInput;
