import * as actionType from '../constants/actionTypes';

const initState = {
    isLogin: localStorage.getItem('isLogin'),
    authMessage: '',
    authData: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem('isLogin', action.isLogin);
            return { ...state, isLogin: action.isLogin, authMessage: action.authMessage };

        // case actionType.AUTH:
        //     localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
        //     return { ...state, authData: action?.data };
        // case actionType.LOGOUT:
        //     localStorage.clear();
        //     return { ...state, authData: null };
        default:
            return state;
    }
}

export default authReducer;