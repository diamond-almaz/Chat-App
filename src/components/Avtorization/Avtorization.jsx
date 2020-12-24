import React from 'react'
import {NavLink} from "react-router-dom";
import { Field, reduxForm } from 'redux-form'
import {AuthAPI} from '../../api/api'
import {connect} from 'react-redux'
import {setUserData} from '../../redux/auth-reducer'
import {Redirect} from "react-router-dom";
import {required} from '../../validator/validator'
import {Input} from '../../common/FieldCommon'
import Preloader from '../Preloader/Preloader'


const AvtorizationForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} component={Input} placeholder={'Введите логин'} name={'login'}/>
            </div>
            <div>
                <Field validate={[required]} type={'password'}  component={Input} placeholder={'Введите пароль'} name={'password'}/>
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/> Запомнить меня
            </div>
            <div>
                <NavLink to={'/registration'}>Зарегистрироваться</NavLink>
            </div>
            <div>
                <button>Вход</button>
            </div>

        </form>)
}

const AdvtorizationReduxForm = reduxForm({form: 'login'})(AvtorizationForm)


class Avtorization extends React.Component {
    state={
        editMode: true
    }
    render() {
        if (!this.state.editMode) return <Preloader/>
        const onSubmit = (data) => {
            this.setState({editMode: false})
            AuthAPI.login(data.login, data.password).then(response => {
                //В случае успешной авторизации
                this.props.setUserData(response.data.id, response.data.login)
            }).catch((response => {
                //Заглушка
                console.log('Заглушка')
                setTimeout(()=>{
                    this.setState({editMode: true})
                    this.props.setUserData(12, data.login)
                },2000)

            }))


        }
        return <>
            <h1>Вход</h1>
            {this.props.isAuth ? <Redirect to={'/profile'}/> : <AdvtorizationReduxForm onSubmit={onSubmit}/>}
        </>
    }
}

let mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth
})



export default connect(mapStateToProps, {setUserData})(Avtorization)



