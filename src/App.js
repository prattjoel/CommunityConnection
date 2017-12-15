import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import FBLoginButton from './components/FBLoginButton';


export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBS012kYgoyxm6ig-ldjhVUElcPldg1wE4',
      authDomain: 'communityconnect-aa662.firebaseapp.com',
      databaseURL: 'https://communityconnect-aa662.firebaseio.com',
      projectId: 'communityconnect-aa662',
      storageBucket: '',
      messagingSenderId: '399029413772'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text style={{ paddingTop: 20 }}>Hello World</Text>
          <View>
            <FBLoginButton />
          </View>
        </View>
      </Provider>
    );
  }
}
