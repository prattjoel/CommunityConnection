'use-strict';

import { connect } from 'react-redux';
import { messageChanged } from '../actions/MessageActions';
import MessageInputField from './MessageInputField';

const mapStateToProps = state => {
  // debugger;
  return (
    { message: state.message.messageText }
  );
};

const mapDispatchToProps = dispatch => {
  return (
    { updateMessageText: text => {
      dispatch(messageChanged(text));
    }
  });
};

const MessageInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInputField);

export default MessageInput;
