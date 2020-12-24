const SET_USER_DATA='SET_USER_DATA'
const LOGOUT='LOGOUT'


let initialState = {
    id: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
            ...state,
            ...action.data,
            isAuth: true
            }
            case LOGOUT:
            return {
                id: null,
                login: null,
                isAuth: false
            }

        default:
            return state;
    }
}


export const setUserData=(id, login)=>({type: SET_USER_DATA,data: {id, login} })
export const logout=()=>({type: LOGOUT})



export default authReducer;