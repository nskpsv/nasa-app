import MainNavigation from '../main-navigation/main-navigation'
import styles from './main-header.module.scss';
import React, { useEffect } from 'react';

export default ({ bgUrl }) => {

    useEffect(() => {
        if (bgUrl.url) {
            bgUrl.media_type === 'video'
                ? document.documentElement.style.setProperty('--bg-video', `url(${bgUrl.url})`)
                : document.documentElement.style.setProperty('--bg-image', `url(${bgUrl.url})`);
        }
    }, [bgUrl])

    return (
        <>
            <div className={styles.header_pad}> </div>
            <header className={styles.header}>
                <section className={styles.content}>
                    <h1 className={styles.content__title}>Armaggedon v2</h1>
                    <h2 className={styles.content__description}>Сервис заказа уничтожения астероидов, опасно подлетающих к Земле.</h2>
                </section>
                <MainNavigation />
            </header>
        </>
    )
};