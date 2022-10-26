import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './main-navigation.module.scss';

const navigation = [
    { id: 1, title: 'Астероиды', path: '/' },
    { id: 2, title: 'Заказ', path: '/order' },
]

const Navigation = () => {

    const { pathname } = useRouter();

    return (
        <nav className={styles.navigation}>
            {navigation.map(({ id, title, path }) => {
                return (
                    <Link key={id} href={path}>
                        <a className={
                            pathname === path
                                ? styles.navigation__link_active
                                : styles.navigation__link
                        }>{title}</a>
                    </Link>
                )
            })}
        </nav>
    )
};

export default Navigation;