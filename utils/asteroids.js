export const extractDataForState = (list) => {

    const map = {};
    const arr = [];

    Object
        .keys(list)
        .map(key => {
            list[key]
                .map(asteroid => {
                    map[asteroid.id] = prepareDataForListItem(asteroid)
                    arr.push(map[asteroid.id])
                })
        });

    return { map, arr };
};

const prepareDataForListItem = (ast) => {

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
    const date = ast.close_approach_data[0].close_approach_date.split('-');
    const result = {};

    result.isDanger = ast.is_potentially_hazardous_asteroid;
    result.approachDate = `${date[2]} ${month[date[1]]} ${date[0]}`;
    result.name = ast.name.match(/(?<=\().+?(?=\))/)[0];
    result.dia = (Math.round(ast.estimated_diameter.meters.estimated_diameter_max + ast.estimated_diameter.meters.estimated_diameter_min) / 2);
    result.approachDistance = {};
    result.approachDistance.km = Math.round(Number(ast.close_approach_data[0].miss_distance.kilometers));
    result.approachDistance.lunar = Math.round(Number(ast.close_approach_data[0].miss_distance.lunar));
    result.id = ast.id;

    return result;
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
