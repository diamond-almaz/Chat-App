import React from 'react';
import s from './../Dialogs.module.css';
import {withRouter} from "react-router-dom";


const Message = (props) => {
    // let messagesElements = props.messages.map( m =><div className={s.dialog} key={m.id}>{m.message}</div>);
    let userId= props.match.params.userId;
    if (userId!=undefined) {
        props.getId(userId)
        let newArr = props.dialogsPage.dialogs.find(i => {
            return i.id == userId
        })
        let userName=newArr.name
        if (newArr.messages.length===0) return <div>C пользователем {newArr.name} сообщений нет</div>
        let showDialogs=newArr.messages.map(i=>{
            return (<div>
                <span>{i.meOryou? <span>Вы:</span>:<span>{userName}:</span>} {i.message}</span>
            </div>)
        })
        return <div>{showDialogs}</div>
        console.log(userName)
    }
    return (
        <>

        </>)
}

export default withRouter(Message);