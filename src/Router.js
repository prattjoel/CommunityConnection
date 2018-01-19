'use strict';

import React from 'react';
import {
  Scene,
  Stack,
  Router,
  Drawer
} from 'react-native-router-flux';
// import FBLoginButton from './components/FBLoginButton';
import Login from './components/Login';
import Home from './components/Home';
import ChatRooms from './containers/ChatRooms';
import MenuImage from './assets/menu_burger.png';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key='root'>
        <Scene
          key='FBLogin'
          component={Login}
          title='Facebook Login'
        />
        <Drawer
          key='drawer'
          drawerImage={MenuImage}
          contentComponent={ChatRooms}
          drawerWidth={300}
          drawerPosition='left'
          title='Choose a Chatroom'
        >
          <Scene
            key='HomePage'
            component={Home}
            title='Chat'
          />
        </Drawer>

      </Stack>
    </Router>
  );
};

export default RouterComponent;
