import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";



const Navbar = (props) => {
    let logoutApp=()=>{
        props.logout();
    }
    return (
        <nav className={s.nav}>
            {props.isAuth?
                <>
                    <div className={s.userInfo}>
                        <span>{props.login}/</span>
                        <NavLink to="/avtorization" onClick={logoutApp}>Выйти</NavLink>
                    </div>
                </>
                : <><div className={`${s.item} ${s.active}`}>
                <NavLink to="/registration" activeClassName={s.activeLink}>Регистрация</NavLink>
            </div>
                <div className={`${s.item} ${s.active}`}>
                <NavLink to="/avtorization" activeClassName={s.activeLink}>Вход</NavLink>
                </div> </>}


            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Профиль пользователя</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Диалоги</NavLink>
            </div>

        </nav>
    )
}

let mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

let mapDispatchToProps=(dispatch)=>({
    logout: ()=>{
        dispatch(logout)
    }
})


export default connect(mapStateToProps,mapDispatchToProps, null, {pure: false})(Navbar);