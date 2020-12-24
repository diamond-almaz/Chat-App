const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
const FIND_FRIEND='FIND_FRIEND'

let initialState = {
    dialogs: [
        {id: 1, name: 'Неописуемый Олень', messages: [{meOryou:true, message: 'Привет как дела?'},{meOryou:true, message: 'Привет как дела?'}]},
    ]
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
       case SEND_MESSAGE:
           let body = action.data
           let ind;
           let newObj=state.dialogs.find((i,index)=>{
               ind=index
               return i.id==action.id})
           let newArr=[...state.dialogs]
           newArr[ind].messages.push({meOryou: true, message: body})
           return {
               dialogs: [...newArr],
           }
       case FIND_FRIEND:
           return {
               ...state,
               dialogs: [...state.dialogs, action.dataFriend]
           }
       default:
           return state;
   }
}

export const sendMessageCreator = (data,id) => ({type: SEND_MESSAGE, data:data, id})
export const findFriendAC=(dataFriend)=>({type: FIND_FRIEND, dataFriend})

export default dialogsReducer;