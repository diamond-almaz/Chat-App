import React from 'react'
import {NavLink} from "react-router-dom";
import { Field, reduxForm } from 'redux-form'
import {AuthAPI} from '../../api/api'
import {required} from '../../validator/validator'
import {Input} from '../../common/FieldCommon'


const RegistrationForm=(props)=>{
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required]} component={Input} placeholder={'Введите логин'} name={'username'}/>
        </div>
        <div>
            <Field validate={[required]} type={'password'} component={Input} placeholder={'Введите пароль'} name={'password1'}/>
        </div>
        <div>
            <Field validate={[required]} type={'password'} component={Input} placeholder={'Введите пароль повторно'} name={'password2'}/>
        </div>
        <div>
            <NavLink to={'/avtorization'}>Уже зарегистрированы?</NavLink>
        </div>
        <div>
            <button>Зарегистрироваться</button>
        </div>

    </form>)
}

const RegistrationReduxForm=reduxForm({form: 'registration'})(RegistrationForm);

const Registration=()=>{
    const onSubmit=(data)=>{
        AuthAPI.registration(data.username,data.password1,data.password2)
    }
    return (
     <>
        <h1>Регистрация</h1>
        <RegistrationReduxForm onSubmit={onSubmit}/>
    </>
    )
}


export default Registration;