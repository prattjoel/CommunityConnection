'use strict';

import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';
import ChatRooms from './containers/ChatRooms';
import GivingPage from './components/Giving';
import ContactForm from './components/ContactForm';
import Announcements from './components/Announcements';

// import MenuImage from './assets/menu_burger.png';
// import ChatMenuButton from './components/ChatMenuButton';
// import Messages from './components/Messages';

const MessagesNav = TabNavigator(
  {
    ChatroomChooser: {
      screen: ChatRooms,
      navigationOptions: {
        headerTitle: 'Messages'
      },
    },
    GivingPage: {
      screen: GivingPage
    },
    ContactForm: {
      screen: ContactForm
    },
    Announcements: {
      screen: Announcements
    }
  },
);

const HomeNav = StackNavigator(

{
   MessageNav: {
      screen: MessagesNav,
      navigationOptions: {
        headerTitle: 'Messages'
      },
    },
    Messages: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Current Messages'
      },
    }
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
      screen: HomeNav,
    }
  }
);

export default MainNav;
