import { combineReducers } from 'redux';
import signIn from './SignInReducer';
import MessageReducer from './MessageReducer';
import ChatRoomReducer from './ChatRoomReducer';

export default combineReducers({
    signIn,
    messages: MessageReducer,
    chatRooms: ChatRoomReducer

});
