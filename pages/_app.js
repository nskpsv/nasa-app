import React, { useEffect } from 'react';
import MainLayout from '../layouts/mainLayout/main-layout';
import '../styles/globals.scss';
import { getApod } from '../services/apod';
import { getAsteroidsData } from '../services/asteroids';
import { extractDataForState } from '../utils/asteroids';

export default function MyApp({ Component, pageProps, bgUrl, initAsteroidsList, nextLink }) {

    const state = {
        nextLink,
        asteroidsMap: initAsteroidsList.map,
        asteroidsList: initAsteroidsList.arr,
        filters: { isDanger: false },
        options: { approachDistance: 'km' },
        order: {},
    };

    useEffect(() => {
        sessionStorage.setItem('state', JSON.stringify(state));
        const oreder = JSON.parse(localStorage.getItem('order'));
        if (oreder) {state.order = oreder}
    }, [])
    
    return (
        <MainLayout bgUrl={bgUrl}>
            <Component {...pageProps} initState={state} />
        </MainLayout>
    )
};

MyApp.getInitialProps = async () => {

    const bgUrl = await getApod();
    const asteroidsData = await getAsteroidsData();
    const initAsteroidsList = extractDataForState(asteroidsData.near_earth_objects);

    return { bgUrl, initAsteroidsList, nextLink: asteroidsData.links.next }
};