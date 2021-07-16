import { AUTH } from '../constants/actionTypes';

export const signin = (formData, history) => (dispatch) => {
        if (!formData) dispatch({ type: AUTH, isLogin: false, authMessage: "No such account." });

        if (formData.username === 'admin') {
            if(formData.password !== 'admin') {
                dispatch({ type: AUTH, isLogin: false, authMessage: "Wrong password." });
            } else {
                dispatch({ type: AUTH, isLogin: true, authMessage: "Login success." });
            }
        } else {
            dispatch({ type: AUTH, isLogin: false, authMessage: "No such account." });
        }
        console.log(history, 'history');
        history.go('/main');
        console.log(history, 'history');

}
