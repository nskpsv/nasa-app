import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/mainLayout/main-layout';
import '../styles/globals.scss';
import { getApod } from '../services/apod';
import { getAsteroidsData } from '../services/asteroids';
import { extractDataForState } from '../utils/asteroids';
import initState, { updateAsteroidsMap, updateNextLink, setOrder, subscribe  } from '../state/state';

export default function MyApp({ Component, pageProps, bgUrl, asteroidsData }) {
    
    const [state, setState] = useState(initState);
    
    subscribe(setState);
    
    useEffect(() => {

        updateAsteroidsMap(extractDataForState(asteroidsData.near_earth_objects));
        updateNextLink(asteroidsData.links.next);
    
        const order = JSON.parse(localStorage.getItem('order'));

        if (order) {
            setOrder(order);
        }
    }, []);

    return (
        <MainLayout bgUrl={bgUrl}>
            <Component {...pageProps} state={state}/>
        </MainLayout>
    );
};

MyApp.getInitialProps = async () => {

    const bgUrl = await getApod();
    const asteroidsData = await getAsteroidsData();
    
    return { bgUrl, asteroidsData }
};