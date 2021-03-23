const SET_USER_DATA = "SET_USER_DATA";

let initialState = {

    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
console.log(action);
            return {
                ...state,
                ...action,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, id, email, login });


export default authReducer;