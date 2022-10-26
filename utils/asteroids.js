import { convertDate } from './common';

export const extractDataForState = (list) => {
    
    const map = {};

    Object
        .keys(list)
        .forEach(key => {
            list[key].forEach((asteroid) => {
                    map[asteroid.id] = convertAsteroidInfo(asteroid)
                })
        });

    return map;
};

const convertAsteroidInfo = (ast) => {
    const result = {};

    result.isDanger = ast.is_potentially_hazardous_asteroid;
    result.approachDate = convertDate(ast.close_approach_data[0].close_approach_date);
    result.name = ast.name.match(/(?<=\().+?(?=\))/)[0];
    result.dia = (Math.round(ast.estimated_diameter.meters.estimated_diameter_max + ast.estimated_diameter.meters.estimated_diameter_min) / 2);
    result.approachDistance = getApproachDistance(ast.close_approach_data[0]);
    result.id = ast.id;
    result.selfLink = ast.links.self;
    result.isOrdered = false;
    
    return result;
};

export const addAsteroidInfo = (asteroid, info) => {

    const list = info.close_approach_data.map(data => {
        
        return {
            approachDate: convertDate(data.close_approach_date),
            approachTime: data.close_approach_date_full.match(/\d\d:\d\d/)[0],
            velocity: parseFloat(data.relative_velocity.kilometers_per_second).toFixed(2) + 'км/с',
            approachDistance: getApproachDistance(data),
            orbitingBody: data.orbiting_body,
        };
    });
  
    return {...asteroid, listOfApproaches: [...list]};
};

const getApproachDistance = (dataObj) => {

    return {
        km: `${Math.round(Number(dataObj.miss_distance.kilometers))} км`,
        lunar: `${Math.round(Number(dataObj.miss_distance.lunar))} л.о.`
    }
};

export const filterAstList = (list, filters) => {
    let result = Object.keys(list).map(key => list[key]);

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
            return list.filter(ast => ast[filter] === fValue)
        } else {
            return list
        }
    },
};
