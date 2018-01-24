'use strict';

import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';
import ChatRooms from './containers/ChatRooms';
// import MenuImage from './assets/menu_burger.png';
import ChatMenuButton from './components/ChatMenuButton';

const MainNav = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login'
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Messages'
    }
  }
});

export default MainNav;
