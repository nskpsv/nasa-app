import React, { useEffect, useState } from 'react';
import ContentLayout from '../../layouts/contentLayout/content-layout';
import AsteroidList from '../../components/asteroid-list/asteroid-list';
import Footer from '../../components/footer/footer';
import classes from './index.module.scss';

export default ({ asteroidsList }) => {

    const filterProps = useState(
        {
            measurDistance: 'км',
            isDanger: false
        }
    )

    const [filters] = filterProps;

    return (
        <>
            <main className={classes.main_content}>
                <ContentLayout filterProps={filterProps}>
                    <AsteroidList asteroidsList={asteroidsList} />
                </ContentLayout>
            </main>
            <Footer />
        </>
    )
}

