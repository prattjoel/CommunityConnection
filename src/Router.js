'use strict';

import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
// import FBLoginButton from './components/FBLoginButton';
import Login from './components/Login';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key='root'>
        <Scene
          key='FBLogin'
          component={Login}
          title='Facebook Login'
        />
        <Scene
          key='HomePage'
          component={Home}
          title='Chat'
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
