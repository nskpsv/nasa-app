import React from 'react';
import Head from 'next/head';
import classes from '../styles/modules/main-header.module.scss';
import MainLayout from '../layouts/mainLayout';
import ContentLayout from '../layouts/contentLayout';
import AsteroidList from './components/asteroid-list';
import Footer from './components/footer';

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <title>NASA-App</title>
            </Head>
            <main className={classes.main_content}>
                <ContentLayout>
                    <AsteroidList />
                </ContentLayout>
            </main>
            <footer>
                <Footer />
            </footer>
        </MainLayout>
    )
}