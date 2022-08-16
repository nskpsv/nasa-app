import React from 'react';
import ContentLayout from '../../layouts/contentLayout/content-layout';
import AsteroidList from '../../components/asteroid-list/asteroid-list';
import Footer from '../../components/footer/footer';
import classes from './index.module.scss';

export default() => {
    return (
        <>
            <main className={classes.main_content}>
                <ContentLayout>
                    <AsteroidList />
                </ContentLayout>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

