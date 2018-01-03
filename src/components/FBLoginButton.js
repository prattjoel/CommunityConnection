'use-strict';

import React, { Component } from 'react';
import firebase from 'firebase';
import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';
import User from '../User';

export default class FBLoginButton extends Component {
// Login user to firebase using acces token from Facebook login
  _firebaseLogin = (token) => {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    firebase.auth().signInWithCredential(credential)
      .then((result) => {
        // console.log('result is: ');
        // console.log(result);
        const { displayName, uid } = result;
        // console.log('name and id are: ');
        // console.log(displayName);
        // console.log(uid);
        this._createUser(displayName, uid, token);
        // console.log(user);
        // console.log(`User token is: ${token}`);
      })
      .catch((error) => {
        console.log('error is: ');
        console.log(error);
      });
  };

//Finish login to Facebook and obtain acces token for firebase login
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
        }
      );
    }
  };

// Create user instance from FB graph API request and Firebase auth
  _createUser = (name, userID, token) => {
    const graphUrl = `https://graph.facebook.com/v2.11/me?fields=id,name,email&access_token=${token}`;
    // console.log(graphUrl);
    fetch(graphUrl)
      .then(
        (response) => {
          // console.log('response from graph request is:');
          // console.log(response);
          response.json()
            .then(
              (json) => {
                // console.log('json is:');
                // console.log(json);
                  const currentUser = new User(name, json.email, userID);
                  // console.log('currentUser is:');
                  // console.log(currentUser);
                  this._addUserToDatabase(currentUser);
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

//Add the user to firebase database
  _addUserToDatabase = (currentUser) => {
    const { userID, email, name } = currentUser;
    const database = firebase.database();
    database.ref(`users/${userID}`).update({
      name,
      email
    });
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
