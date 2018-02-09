import MainNav from '../Router';

const initialState = MainNav.getStateForAction(MainNav.router.getActionForPathAndParams('LoginNav'));

export default (state = initialState, action) => {
    const newState = MainNav.router.getStateForAction(action, state);

    return newState || state;
};
