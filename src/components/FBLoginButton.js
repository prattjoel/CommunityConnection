import React, { Component } from 'react';
import { alert } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

// const FBSDK = require('react-native-fbsdk');

export default class FBLoginButton extends Component {
  render() {
    return (
      <LoginButton
        // style={{ width: 100 }}
        publishPermissions={['publish_actions']}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert(`Login failed with error: ${result.error}`);
            } else if (result.isCancelled) {
              alert('Login was cancelled');
            } else {
              alert(`Login was successful with permissions: ${result.grantedPermissions}`);
            }
          }
        }
        onLogoutFinished={() => alert('User logged out')}
      />
    );
  }
}
