import React from 'react';
import s from './Header.module.css';
import logoForHeader from './../../assets/images/logoForHeader.png'

const Header = () => {
    return <header className={s.header}>


        <div className={s.title}>Чат для обмена сообщениями</div>
    </header>
}

export default Header;