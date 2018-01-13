import { combineReducers } from 'redux';
import signIn from './SignInReducer';
import MessageReducer from './MessageReducer';

export default combineReducers({
    signIn,
    message: MessageReducer
});
