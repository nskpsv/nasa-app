export const getApod = async () => {
    const res = await fetch(
        'https://api.nasa.gov/planetary/apod?' + new URLSearchParams({api_key: 'vOkZoeA9I8d90alfntkMPsfyreTyKQ894sywGETP'})
        );
    const picture = await res.json();

    return picture.url
};