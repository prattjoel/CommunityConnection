'use-strict';

import React, { Component } from 'react';
import firebase from 'firebase';
import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  _firebaseLogin = (token) => {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    firebase.auth().signInWithCredential(credential)
      .then((result) => {
        console.log('result is: ');
        console.log(result);
      })
      .catch((error) => {
        console.log('error is: ');
        console.log(error);
      });
  };

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
          const user = this._firebaseLogin(token);
          console.log(user);
          console.log(`User token is: ${token}`);
        }
      );
    }
  };

  render() {
    return (
      <LoginButton
        readPermissions={['public_profile']}
        onLoginFinished={this._fbLoginComplete.bind(this)}
        onLogoutFinished={() => console.log('User logged out')}
      />
    );
  }
}
