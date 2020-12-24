import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm,reset } from 'redux-form';
import {Route} from "react-router-dom";
import {withRouter} from "react-router-dom";
import Preloader from '../Preloader/Preloader'

class AddMessageForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div><Field component={'textarea'} name={"message"} placeholder='Введите сообщение'/></div>
                <div>
                    <button>Отправить</button>
                </div>
            </form>
        )
    }
}

let AddMessageFormRedux=reduxForm({form: 'addMessage'})(AddMessageForm)


class Dialogs extends React.Component {
    state={
        id: null,
        showDialogs: true,
        toggleInterests: false
    }


    async getId(id) {
        if (id==this.state.id) return
        await this.setState({id: id})
    }
     findFriend() {
        if (!this.props.existInterests) {
            alert('Добавьте пожалуйста интересы')
            this.props.history.push(`/profile`)
            return
        }
        this.setState({showDialogs: false})
         setTimeout(()=>{
             let response={id: 2, name: 'Немилосердный Баран', messages: []}
             this.props.findFriend(response)
             this.setState({showDialogs: true})
             alert(`Ваш новый собеседник - ${response.name}`)
             this.props.history.push(`/dialogs/${response.id}`)

         },2000)


    }
    render() {
        if (!this.state.showDialogs) return <Preloader/>
        let state = this.props.dialogsPage;

        if (state.dialogs.length===0) return (<div onClick={this.findFriend.bind(this)} style={{padding: "10px"}}><button>Найти собеседника</button></div>)

        let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);


        let onSubmit = (data,dispatch,props) => {
            this.props.sendMessage(data.message, this.state.id);
            dispatch(props.reset())
        }
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>
                        <Route path='/dialogs/:userId?'
                               render={() => <Message {...this.props} messages={state.messages} getId={this.getId.bind(this)}/>}/>
                    </div>
                    {this.state.id!=null?<AddMessageFormRedux onSubmit={onSubmit}/> :''}
                </div>
            </div>
        )
    }
}


export default withRouter(Dialogs);