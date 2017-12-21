'use-strict';

import React, { Component } from 'react';
import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  _fbLoginComplete = (error, result) => {
    console.log('login finished called');
    if (error) {
      console.log(`Login failed with error: ${result.error}`);
    } else if (result.isCancelled) {
      console.log('Login was cancelled');
    } else {
      console.log(`Login was successful with permissions: ${result.grantedPermissions}`);
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          const token = data.accessToken.toString();
          console.log(`User token is: ${token}`);
        }
      );
    }
  };

  render() {
    return (
      <LoginButton
        readPermissions={['public_profile']}
        onLoginFinished={this._fbLoginComplete}
        onLogoutFinished={() => console.log('User logged out')}
      />
    );
  }
}
