'use strict';
import { SIGN_IN_USER } from '../actions/types';

const signIn = (state = { isSignedIn: false }, action) => {
  console.log('signIn reducer called');
  switch (action.type) {
    case SIGN_IN_USER:
      console.log('state for SIGN_IN_USER set');
      return ([...state, { isSignedin: action.isSignedIn }]);
    default:
      console.log('default state returned');
      console.log(state);
      return state;
  }
};

export default signIn;
