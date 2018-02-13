import MainNav from '../Nav/Router';


// const initialState = MainNav.router.getStateForAction(
//     MainNav.router.getActionForPathAndParams('LoginNav')
// );

export default (state, action) => {
    const newState = MainNav.router.getStateForAction(action, state);
    // debugger;

    return newState || state;
};
