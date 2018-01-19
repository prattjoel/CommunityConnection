'use-strict';

import { connect } from 'react-redux';
import { setChatRoom } from '../actions/ChatRoomActions';
import ChatRoomList from '../components/ChatRoomList';
// import MessageList from '../components/MessageList';

//
const mapStateToProps = state => {
  const { currentChatRoom } = state.chatRooms;
  // debugger;
  return (
    {
      currentChatRoom,
      availableChatRooms: state.chatRooms
    }
  );
};

//
const mapDispatchToProps = dispatch => {
  return (
    {
      setChatRoom: () => {
        dispatch(setChatRoom);
      }
  });
};

const ChatRooms = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoomList);

export default ChatRooms;
