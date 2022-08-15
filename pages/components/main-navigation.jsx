import Link from 'next/link';
import React from 'react';
import classes from '../../styles/modules/main-navigation.module.scss';

export default () => {
    return (
        <>
            <Link href={'/'} className={classes.nav_list__link}><a>Астероиды</a></Link>
            <Link href={'/'} className={classes.nav_list__link}><a>Заказ</a></Link>
        </>
    )
}