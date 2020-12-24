const GET_ME_INTERESTS='GET_ME_INTERESTS';
const CREATE_INTERESTS='CREATE_INTERESTS';
const CHANGE_INTERESTS='CHANGE_INTERESTS';
const CHANGE_ONE_INTEREST='CHANGE_ONE_INTEREST';
const BUTTON_IS_CLICKED='BUTTON_IS_CLICKED';
const CLEAR_INTERESTS='CLEAR_INTERESTS';



let initialState = {
    name: 'Ослепительный бык',
    rating: 5,
    interests: {
        "sport": 0,
        "creation": 0,
        "music": 0,
        "literature": 0,
        "film": 0,
        "science": 0,
        "cars": 0,
        "technology": 0,
        "politics": 0,
        "travel": 0,
        "cooking": 0,
        "art": 0,
        "games": 0,
        "craft": 0,
        "parenting": 0
    },
    btn: false,
    existInterests: false
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ME_INTERESTS:
            return {
                ...state
            }
        case CREATE_INTERESTS:
            return {
                ...state,
                interests: {...state.interests, ...action.interests},
                existInterests: true
            }
        case CHANGE_INTERESTS:
            return {
                ...state,
                interests: {...state.interests, ...action.interests}
            }
        case CHANGE_ONE_INTEREST:
            return {
                ...state,
                interests: {...state, ...action.interests},
                existInterests: true
            }
        case BUTTON_IS_CLICKED:
            return {
                ...state,
                btn: !state.btn
            }
        case CLEAR_INTERESTS:
            let newObj={...state.interests}
            let clearingInterests={}
            for (let i in newObj) {
                newObj[i]=0
                clearingInterests={...clearingInterests,...newObj}
            }
            return {
                ...state,
                interests: {...clearingInterests},
                existInterests: false
            }
        default:
            return state;
    }
}

export const getMeInterests=()=>({type:GET_ME_INTERESTS})
export const createInterests=(interests)=>({type: CREATE_INTERESTS, interests})
export const changeInterests=(interests)=>({type: CHANGE_INTERESTS, interests: interests })//Содержит в себе оъект с изменёнными интересами
export const changeOneInterest=(interest)=>({type: CHANGE_ONE_INTEREST, interest})
export const buttonIsClicked=()=>({type:BUTTON_IS_CLICKED});
export const clearInterests=()=>({type: CLEAR_INTERESTS})


export default profileReducer;