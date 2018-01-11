'use-strict';

import { connect } from 'react-redux';
import { signInUser } from '../actions';
import FBLoginButton from './FBLoginButton';

const mapStateToProps = state => {
  console.log('mapStateToProps called');
  console.log(state.signIn.isSignedIn);
  return (
    { isSignedIn: state.signIn.isSignedIn }
  );
};

const mapDispatchToProps = dispatch => {
  return (
    { updateSignIn: signedInStatus => {
      dispatch(signInUser(signedInStatus));
    }
  });
};

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(FBLoginButton);

export default LoginPage;
