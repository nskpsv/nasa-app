export const convertToEnum = (data) => {

    const result = {};

    Object
        .keys(data.near_earth_objects)
        .map(key => {
            data.near_earth_objects[key]
                .map(asteroid => result[asteroid.id] = asteroid)
        });

    return result;
};

export const prepareDataForListItem = (ast) => {

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

    return result;
};