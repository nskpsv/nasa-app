import MainNavigation from '../main-navigation/main-navigation'
import styles from './main-header.module.scss';
import React, { useEffect } from 'react';

export default ({ bgUrl }) => {

    useEffect (() => {
        document.documentElement.style.setProperty('--bg', `url(${bgUrl})`);
    }, [])

    return (
        <header className={styles.wrapper}>  
            <section className={styles.header}>
                <h1 className={styles.header__title}>Armaggedon v2</h1>
                <h2 className={styles.header__description}>Сервис заказа уничтожения астероидов, опасно подлетающих к Земле.</h2>
            </section>
                <MainNavigation />
        </header>
    )
};