export const convertDate = (date) => {

    const [y, m, d] = date.split('-');
    const month = {
        '01': 'января',
        '02': 'февраля',
        '03': 'марта',
        '04': 'апреля',
        '05': 'мая',
        '06': 'июня',
        '07': 'июля',
        '08': 'августа',
        '09': 'сентября',
        '10': 'октября',
        '11': 'ноября',
        '12': 'декабря'
    };

    return `${d} ${month[m]} ${y}`
};

export const ending = (count) => {

    if (count === 1) {
        return '';
    }

    if (count > 1 && count < 5) {
        return 'а';
    }

    if (count > 20) {

        const st = String(count);
        const n = Number(st.slice(st.length - 2));

        if (n < 5 || n > 20) {
            return ending(Number(st.slice(st.length - 1)));
        }
    }

    return 'ов';
}