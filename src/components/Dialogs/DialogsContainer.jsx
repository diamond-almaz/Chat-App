import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withRedirect} from '../../hoc/withRedirect'
import {compose} from 'redux';
import {findFriendAC} from './../../redux/dialogs-reducer'


let f1=(state)=>{
    return {
        dialogsPage: state.dialogsPage,
        existInterests: state.profilePage.existInterests
    }
}

let f2=(dispatch)=>{
    return {
        sendMessage: (data,id)=>{
            dispatch(sendMessageCreator(data,id));
        },
        findFriend: (dataFriend)=>{
            dispatch(findFriendAC(dataFriend))
        }
    }
}

const DialogsContainer=connect(f1,f2)(Dialogs)

export default compose(withRouter,withRedirect)(DialogsContainer)
