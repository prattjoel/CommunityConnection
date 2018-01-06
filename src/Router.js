'use strict';

import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import FBLoginButton from './components/FBLoginButton';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key='root'>
        <Scene
          key='FBLogin'
          component={FBLoginButton}
          title='Facebook Login'
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
