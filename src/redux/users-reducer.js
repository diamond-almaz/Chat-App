const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET-USERS'

    // [
    // {
    //     id: 1,
    //     photoUrl: 'https://vokrug.tv/pic/news/f/d/a/f/fdafa4953b333881d795aeac1b0e392a.jpg',
    //     followed: false,
    //     fullName: 'Almaz',
    //     status: 'i am a boss',
    //     location: {city: 'Kazan', country: 'Russia'}
    // },
    //     {
    //         id: 2,
    //         photoUrl: 'https://vokrug.tv/pic/news/f/d/a/f/fdafa4953b333881d795aeac1b0e392a.jpg',
    //         followed: true,
    //         fullName: 'Andrew',
    //         status: 'i am a boss too',
    //         location: {city: 'Kiev', country: 'Ukraine'}
    //     },
    //     {
    //         id: 3,
    //         photoUrl: 'https://vokrug.tv/pic/news/f/d/a/f/fdafa4953b333881d795aeac1b0e392a.jpg',
    //         followed: false,
    //         fullName: 'Dmitry',
    //         status: 'i am a boss too',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     }
    // ]

let initialState = {
    users: []
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((i)=>{
                    if (i.id===action.userID)
                    {
                        return {...i, followed: true}
                    }
                    return i
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((i)=>{
                    if (i.id===action.userID)
                    {
                        return {...i, followed: false}
                    }
                    return i
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}


export const followAC = (id) => ({type: FOLLOW, userID: id})
export const unfollowAC = (id) => ({type: UNFOLLOW, userID: id})
export const setUsersAC=(users)=>({type: SET_USERS, users: users})

export default userReducer;