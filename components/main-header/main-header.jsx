import MainNavigation from '../main-navigation/main-navigation'
import classes from './main-header.module.scss';
import React, { useEffect } from 'react';

export default ({ bgUrl }) => {

    useEffect (() => {
        document.documentElement.style.setProperty('--bg', `url(${bgUrl})`);
    }, [])

    return (
        <header className={classes.wrapper}>  
            <section className={classes.header}>
                <h1 className={classes.header__title}>Armaggedon v2</h1>
                <h2 className={classes.header__description}>Сервис заказа уничтожения астероидов, опасно подлетающих к Земле.</h2>
            </section>
                <MainNavigation />
        </header>
    )
};