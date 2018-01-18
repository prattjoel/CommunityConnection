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
import ChatRoomList from './components/ChatRoomList';
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
          contentComponent={ChatRoomList}
          drawerWidth={300}
          drawerPosition='right'
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
