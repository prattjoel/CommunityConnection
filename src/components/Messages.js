'use-strict';

import { connect } from 'react-redux';
import _ from 'lodash';
import { getMessages } from '../actions/MessageActions';
import MessageList from './MessageList';

// Send array of messages as prop to be displayed in MessageList Component
const mapStateToProps = state => {
  return (
    { messagesToDisplay: _.values(state.messages.messagesToShow) }
  );
};

// Send getMessages as prop for retrieving messages from database to MessageList Component
const mapDispatchToProps = dispatch => {
  return (
    {
      getMessages: () => {
        dispatch(getMessages());
      }
  });
};

const Messages = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);

export default Messages;
