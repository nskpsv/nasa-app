export const getAsteroidsData = async (fullUrl = null, params = null) => {

    if (fullUrl) {
        const res = await fetch(fullUrl);

        return await res.json();
    }

    if (!params) {
        const today = new Date();
        params = {
            start_date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
        }
    }

    const res = await fetch('https://api.nasa.gov/neo/rest/v1/feed?' + new URLSearchParams(
        Object.assign({ params, api_key: 'vOkZoeA9I8d90alfntkMPsfyreTyKQ894sywGETP' })));

    return await res.json();
}