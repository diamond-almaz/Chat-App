import React from 'react';
import s from './Profile.module.css';
import {connect} from "react-redux";
import Profile from "./Profile";
import {compose} from "redux";
import {withRedirect} from '../../hoc/withRedirect'

import {changeInterests,buttonIsClicked,createInterests,clearInterests} from "../../redux/profile-reducer";

const ProfileContainer = (props) => {
    return (
       <Profile {...props}/>
    )
}

let mapStateToProps=(state)=>{
    return {
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth
    }
}



export default compose(
    connect(mapStateToProps,{changeInterests,buttonIsClicked,createInterests,clearInterests}),
    withRedirect
)(ProfileContainer)