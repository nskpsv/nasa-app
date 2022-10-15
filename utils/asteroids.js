import { getAsteroidsData } from "../services/asteroids";

export const extractDataForState = (list) => {
    
    const map = {};
    const arr = [];

    Object
        .keys(list)
        .map(key => {
            list[key]
                .map(async (asteroid) => {
                    const fullData = await getAsteroidsData(asteroid.links.self);
                    console.log(fullData);
                    map[asteroid.id] = prepareDataForListItem(asteroid, fullData)
                    arr.push(map[asteroid.id])
                })
        });

    return { map, arr };
};

const prepareDataForListItem = (ast, fullData) => {

    const result = {};

    result.isDanger = ast.is_potentially_hazardous_asteroid;
    result.approachDate = convertDate(ast.close_approach_data[0].close_approach_date);
    result.name = fullData.designation;
    result.dia = (Math.round(ast.estimated_diameter.meters.estimated_diameter_max + ast.estimated_diameter.meters.estimated_diameter_min) / 2);
    result.approachDistance = getApproachDistance(ast.close_approach_data[0]),
    result.id = ast.id;
    result.allApproachDates = fullData.close_approach_data.map(data => {

        return {
            approachDate: convertDate(data.close_approach_date),
            approachTime: data.close_approach_date_full.match(/\d\d:\d\d/)[0],
            velocity: data.relative_velocity.kilometers_per_second,
            approachDistance: getApproachDistance(data),
            orbitingBody: data.orbiting_body,
        };
    });


    return result;
};

const getApproachDistance = (dataObj) => {

    return {
        km: `${Math.round(Number(dataObj.miss_distance.kilometers))} км`,
        lunar: `${Math.round(Number(dataObj.miss_distance.lunar))} л.о.`
    }
};

const convertDate = (date) => {

    const [y, m, d] = date.split('-');
    const month = {
        '00': 'января',
        '01': 'февраля',
        '02': 'марта',
        '03': 'апреля',
        '04': 'мая',
        '05': 'июня',
        '06': 'июля',
        '07': 'августа',
        '08': 'сентября',
        '09': 'октября',
        '10': 'ноября',
        '11': 'декабря'
    };

    return `${d} ${month[m]} ${y}`
};

export const filterAstList = (list, filters) => {
    let result = [...list];

    for (let key in filters) {
        switch (typeof (filters[key])) {
            case 'boolean': {
                result = actions.bool(key, filters[key], result);
                break;
            };
        };
    };

    return result;
};

const actions = {
    bool: (filter, fValue, list) => {
        if (fValue) {
            return list.filter((ast) => ast[filter] === fValue)
        } else {
            return list
        }
    },
};
