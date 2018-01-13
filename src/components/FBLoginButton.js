'use-strict';

import React, { Component } from 'react';
import firebase from 'firebase';
import {
  View,
  StyleSheet
} from 'react-native';
import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import User from '../User';

export default class FBLoginButton extends Component {
  componentWillMount() {
    this._isLoggedin();
  }
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

  _firebaseLogout = () => {
    firebase.auth().signOut().then(
      () => {
        console.log('user Signed Out of firebase');
        this.props.updateSignIn(false);
        // console.log('user sign in status after firebase logout');
        // console.log(this.props.isSignedIn);
    }).catch(
      (error) => {
        console.log('firebase sign out error');
        console.log(error);
    });
  };

//Finish login to Facebook and obtain acces token for firebase login
  _fbLoginComplete = (error, result) => {
    // console.log('login finished called');
    if (error) {
      console.log(`Login failed with error: ${result.error}`);
    } else if (result.isCancelled) {
      console.log('Login was cancelled');
    } else {
      // console.log(`Login was successful with permissions: ${result.grantedPermissions}`);
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

// Add listener to see if the user is signed in to Firebase
  _isLoggedin = () => {
    // console.log('isSignedIn in _isLoggedin');
    // console.log(this.props.isSignedIn);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log('signed in user:');
        const userID = user.uid;
        const databaseRef = firebase.database().ref(`users/${user.uid}`);
        // console.log('databaseRef:');
        // console.log(databaseRef);
        databaseRef.once('value')
          .then((snapshot) => {
            // console.log('snapshot:');
            // console.log(snapshot);
            const name = snapshot.child('name').val();
            const email = snapshot.child('email').val();
            const currentUser = new User(name, email, userID);
            this.props.updateSignIn(true);
            // console.log('isSignedIn after logged in');
            // console.log(this.props.isSignedIn);
            Actions.HomePage();
            // console.log(currentUser);
          })
          .catch((error) => {
            console.log('error checking for child:');
            console.log(error);
          });
      } else {
        console.log('user not signed in');
      }
    });
  };

  render() {
    return (
        <View style={styles.containerStyle}>
          <LoginButton
            readPermissions={['public_profile']}
            onLoginFinished={this._fbLoginComplete.bind(this)}
            onLogoutFinished={this._firebaseLogout.bind(this)}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#192D59',
  },
});
