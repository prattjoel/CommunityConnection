'use-strict';

import { connect } from 'react-redux';
import {
  messageChanged,
  sendMessage
} from '../../actions/MessageActions';
import MessageInputField from './MessageInputField';

const mapStateToProps = state => {
  return (
    {
      message: state.messages.messageText,
      currentChatRoom: state.chatRooms.currentChatRoom
    }
  );
};

const mapDispatchToProps = dispatch => {
  return (
    {
      updateMessageText: text => {
      dispatch(messageChanged(text));
    },
      sendMessageText: (message, currentChatRoom) => {
        dispatch(sendMessage(message, currentChatRoom));
      }
  });
};

const MessageInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInputField);

export default MessageInput;
