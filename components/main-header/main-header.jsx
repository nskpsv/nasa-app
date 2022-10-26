import MainNavigation from '../main-navigation/main-navigation'
import styles from './main-header.module.scss';
import React, { useEffect } from 'react';

export default ({ bgUrl }) => {

    useEffect(() => {
        if (bgUrl.url) {
            bgUrl.media_type === 'video'
                ? document.documentElement.style.setProperty('--bg-video', `url(${bgUrl.url})`)
                : document.documentElement.style.setProperty('--bg-image', `url(${bgUrl.url})`);
        }
    }, [bgUrl])

    return (
        <>
            <div className={styles.header_pad}></div>
            <header className={styles.header}>
                <section className={styles.content}>
                    <h1 className={styles.content__title}>Armaggedon v2</h1>
                    <h2 className={styles.content__description}>Сервис заказа уничтожения астероидов, опасно подлетающих к Земле.</h2>
                </section>
                <MainNavigation />
            </header>
        </>
    )
};

/* {
    "copyright": "Makrem Larnaout",
    "date": "2022-10-25",
    "explanation": "Jupiter and its moons move like our Sun and its planets. Similarly, Jupiter spins while its moons circle around. Jupiter’s rotation can be observed by tracking circulating dark belts and light zones. The Great Red Spot, the largest storm known, rotates to become visible after about 15 seconds in the 48-second time lapse video. The video is a compilation of shorts taken over several nights last month and combined into a digital recreation of how 24-continuous hours would appear. Jupiter's brightest moons always orbit in the plane of the planet's rotation, even as Earth’s spin makes the whole system appear to tilt.  The moons Europa, Ganymede, and Io are all visible, with Europa's shadow appearing as the icy Galilean moon crosses Jupiter's disk.  Jupiter remains near opposition this month, meaning that it is unusually bright, near to its closest to the Earth, and visible nearly all night long.   Almost Hyperspace: Random APOD Generator",
    "media_type": "video",
    "service_version": "v1",
    "title": "Jupiter Rotates as Moons Orbit",
    "url": "https://www.youtube.com/embed/juloL5WeLrc?rel=0"
  } */
