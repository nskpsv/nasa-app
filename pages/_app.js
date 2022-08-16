import React from 'react';
import MainLayout from '../layouts/mainLayout/main-layout';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps, bgUrl }) {

    return (
        <MainLayout bgUrl={bgUrl}>
            <Component {...pageProps} />
        </MainLayout>
    )
}

MyApp.getInitialProps = async () => {
    
    const res = await fetch('https://api.nasa.gov/planetary/apod?' + new URLSearchParams({
        api_key: 'vOkZoeA9I8d90alfntkMPsfyreTyKQ894sywGETP'
    }));
    const bg = await res.json();

    return { bgUrl: bg.url, }
};