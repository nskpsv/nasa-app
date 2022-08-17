import React, { useEffect } from 'react';
import MainLayout from '../layouts/mainLayout/main-layout';
import '../styles/globals.scss';
import { getApod } from '../services/apod';
import { getAsteroidsData } from '../services/asteroids';
import { convertToEnum } from '../utils/asteroids';

export default function MyApp({ Component, pageProps, bgUrl, asteroidsList, asteroidsData }) {

    useEffect(() => {
        sessionStorage.setItem('nextAsteroidsPartUrl', asteroidsData.links.next);
    }, [])
    
    return (
        <MainLayout bgUrl={bgUrl}>
            <Component {...pageProps} asteroidsList={asteroidsList} />
        </MainLayout>
    )
};

MyApp.getInitialProps = async () => {

    const bgUrl = await getApod();
    const asteroidsData = await getAsteroidsData();
    const asteroidsList = convertToEnum(asteroidsData);

    return { bgUrl, asteroidsList, asteroidsData }
};