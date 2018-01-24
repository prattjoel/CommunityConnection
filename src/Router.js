'use strict';

import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';
import ChatRooms from './containers/ChatRooms';
// import MenuImage from './assets/menu_burger.png';
import ChatMenuButton from './components/ChatMenuButton';

const MessageNav = StackNavigator(

{
   MessageHome: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Messages'
      },
    },
  },
  {
    headerMode: 'none'
  }
);

const MainNav = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerTitle: 'Login'
      }
    },
    Home: {
      screen: MessageNav,
      headerMode: 'none'
      // navigationOptions: {
      //   headerMode: 'none'
      // }
    }
  }
);

export default MainNav;
