import React from 'react';
import styles from './footer.module.scss';

export default () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer__text}>2022 © Все права и планета защищены</p>
        </footer>
    )
}