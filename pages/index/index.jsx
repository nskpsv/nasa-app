import React, { useEffect, useState } from 'react';
import ContentLayout from '../../layouts/contentLayout/content-layout';
import AsteroidList from '../../components/asteroid-list/asteroid-list';
import Footer from '../../components/footer/footer';
import styles from './index.module.scss';
import { extractDataForState, filterAstList } from '../../utils/asteroids';


export default ({ initState }) => {

    const [state, setState] = useState(initState)
    const [filtredList, setfiltredList] = useState(null);
    const {filters, options, asteroidsList, order} = state;

    const setFilters = (filter) => {
        setState({
            ...state, 
            filters: {...filters, ...filter}
        });
        sessionStorage.setItem('state', JSON.stringify(state));
    };

    const setOptions = (option) => {
        setState({
            ...state, 
            options: {...options, ...option}
        });
        sessionStorage.setItem('state', JSON.stringify(state));
    };

    const setAsteroidsData = (list) => {

        const data = extractDataForState(list.near_earth_objects);
        setState({
            ...state, 
            asteroidsList: state.asteroidsList.concat(data.arr),
            asteroidsMap: {...state.asteroidsMap, ...data.map},
            nextLink: list.links.next
        });
        sessionStorage.setItem('state', JSON.stringify(state));
    };

    const setOreder = (item) => {
        const buff = {
            ...state,
            order: Object.assign({}, state.order, item)
        }
        setState(buff);
        localStorage.setItem('order', JSON.stringify(buff.order));
        console.log(buff.order);
    }

    useEffect(() => {
        if (!state) {JSON.parse(sessionStorage.getItem('state'))};
    }, []);
    
    useEffect(() => {
        setfiltredList(filterAstList(asteroidsList, filters));
    }, [filters, asteroidsList]);

    return (
        <>
            <main className={styles.main_content}>
                <ContentLayout filterProps={[filters, setFilters]} optionProps={[options, setOptions]}>
                    <AsteroidList asteroidsList={filtredList} setList={setAsteroidsData} option={options} next={state.nextLink} onAddToOrder={setOreder} />
                </ContentLayout>
            </main>
            <Footer />
        </>
    )
}

