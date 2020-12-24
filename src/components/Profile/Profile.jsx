import React, {Component} from 'react';
import s from './Profile.module.css';
import Interests from "./Interests";
import * as axios from "axios";
import Preloader from '../Preloader/Preloader'



class Profile extends Component {

    componentDidMount() {
        //Здесь должен быть запрос на сервер для получения информации о пользователе (Генерация ника пользователя, получение рейтинга, получение интересов)
    }

     render() {
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <div>Имя пользователя: {this.props.profilePage.name}</div>
                    <div>Рейтинг: {this.props.profilePage.rating}</div>
                    <Interests clearInterests={this.props.clearInterests} createInterests={this.props.createInterests} btn={this.props.profilePage.btn} buttonIsClicked={this.props.buttonIsClicked} interests={this.props.profilePage.interests} changeInterests={this.props.changeInterests}/>


                </div>
            </div>
        )
    }
}



export default Profile;