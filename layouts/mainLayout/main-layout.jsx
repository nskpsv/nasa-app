import MainHeader from '../../components/main-header/main-header'
import React from "react"
import styles from './main-layout.module.scss';
import Head from 'next/head';
import Footer from '../../components/footer/footer';

export default ({ children, bgUrl }) => {
   return (
      <section className={styles.wrapper}>
         <Head>
            <title>NASA-App</title>
         </Head>
         <MainHeader bgUrl={bgUrl} />
         <>
            {children}
         </>
         <Footer />
      </section>
   )
}