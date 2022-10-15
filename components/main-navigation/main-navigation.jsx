import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './main-navigation.module.scss';

const navigation = [
    { id: 1, title: 'Астероиды', path: '/' },
    { id: 2, title: 'Заказ', path: '/order' },
]

export default () => {

    const { pathname } = useRouter();

    return (
        <nav className={styles.main_nav}>
            {navigation.map(({ id, title, path }) => {
                return (
                    <Link key={id} href={path}>
                        <a className={`${styles.main_nav__link} ${pathname === path ? styles.active : null}`}>{title}</a>
                    </Link>
                )
            })}
        </nav>
    )
}