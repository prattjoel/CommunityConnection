'use strict';
import { SIGN_IN_USER } from './types';

export const signInUser = isSignedIn => {
  return (
    {
      type: SIGN_IN_USER,
      isSignedIn
    }
  );
};
