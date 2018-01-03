'use-strict';

import React, { Component } from 'react';
import firebase from 'firebase';
import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';
import User from '../User';

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
          this._createUser(token);
          // console.log(user);
          // console.log(`User token is: ${token}`);
        }
      );
    }
  };

  _createUser = (token) => {
    const graphUrl = `https://graph.facebook.com/v2.11/me?fields=id,name,email&access_token=${token}`;
    console.log(graphUrl);
    fetch(graphUrl)
      .then(
        (response) => {
          console.log('response from graph request is:');
          console.log(response);
          response.json()
            .then(
              (json) => {
                  console.log('currentUser is:');
                  const currentUser = new User(json.name, json.email, json.id);
                  console.log(currentUser);
              }
            );
        })
      .catch(
        (error) => {
          console.log('error with graph request: ');
          console.log(error);
        }
      );
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
