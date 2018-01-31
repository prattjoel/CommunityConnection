'use strict';

import React from 'react';
import { Text } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';
import ChatRooms from './containers/ChatRooms';
import GivingPage from './components/Giving';
import ContactForm from './components/ContactForm';
import Announcements from './components/Announcements';
import SettingsMenu from './components/Settings';

// import MenuImage from './assets/menu_burger.png';
// import ChatMenuButton from './components/ChatMenuButton';
// import Messages from './components/Messages';

const HomeNav = TabNavigator(
  {
    ChatroomChooser: {
      screen: ChatRooms,
      // navigationOptions: {
      //   headerTitle: 'Messages'
      // },
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

const MessagesNav = StackNavigator(

{
   HomeTabs: {
      screen: HomeNav,
      // navigationOptions: {
      //   headerTitle: 'Messages Home'
      // },
    },
    Messages: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Current Messages'
      },
    },
  },
  {
    // initialRouteName: 'MessageHome',
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerRight:
        <Text
          onPress={() => {
            navigation.navigate('DrawerToggle');
          }
          }
        >
          Menu
        </Text>
    })
  // {
  //   headerMode: 'none'
  // }
},
);

const MenuDrawer = DrawerNavigator(
  {
    MessageHome: {
      screen: MessagesNav
    },
    SettingsMenu: {
      screen: SettingsMenu
    },
    Logout: {
      screen: Login
    },
  },
  {
    drawerPosition: 'right'
  }
);

const DrawerNav = StackNavigator(
  {
    MenuDrawer: {
      screen: MenuDrawer
    },
},
{
  headerMode: 'none'
}
// {
//   // initialRouteName: 'MessageHome',
//   headerMode: 'float',
//   navigationOptions: ({ navigation }) => ({
//     // headerStyle: { backgroundColor: '#4C3E54' },
//     title: 'Home',
//     // headerTintColor: 'white',
//     headerLeft:
//       <Text
//         onPress={() => {
//           navigation.navigate('DrawerToggle');
//         }
//         }
//       >
//         Menu
//       </Text>
//   })
// }
);

const MainNav = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: DrawerNav,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  },
);

export default MainNav;
