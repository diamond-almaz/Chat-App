import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Avtorization from "./components/Avtorization/Avtorization";
import Registration from "./components/Registration/Registration";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {withRouter} from 'react-router'

class App extends React.Component {

    componentDidMount() {
        this.props.history.push('/avtorization')
    }

    render() {
        return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/avtorization'
                           render={() => <Avtorization/>}/>
                    <Route path='/registration'
                           render={() => <Registration/>}/>
                </div>
            </div>
        )
    }
}

export default withRouter(App);