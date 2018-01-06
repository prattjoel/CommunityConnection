'use strict';

import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import FBLoginButton from './components/FBLoginButton';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
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

// const styles = {
//   containerStyle: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#d5e6f4'
//   }
// };

export default RouterComponent;
