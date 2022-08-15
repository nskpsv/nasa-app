import MainNavigation from  '../components/main-navigation'
import classes from '../../styles/modules/main-header.module.scss';
import React from 'react';

export default () => {
    return (
        <>
            <section className={classes.header}>
                <h1 className={classes.header__title}>Armaggedon v2</h1>
                <h2 className={classes.header__description}>Сервис заказа уничтожения астероидов, опасно подлетающих к Земле.</h2>
            </section>
            <section className={classes.main_nav}>
            <MainNavigation />
            </section>
        </>
    )
}