import React, { Component } from 'react';
import { alert } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

// const FBSDK = require('react-native-fbsdk');

export default class FBLoginButton extends Component {
  render() {
    return (
      <LoginButton
        readPermissions={['public_profile']}
        onLoginFinished={
          (error, result) => {
            if (error) {
              console.log(`Login failed with error: ${result.error}`);
            } else if (result.isCancelled) {
              console.log('Login was cancelled');
            } else {
              console.log(`Login was successful with permissions: ${result.grantedPermissions}`);
            }
          }
        }
        onLogoutFinished={() => console.log('User logged out')}
      />
    );
  }
}
