const API_KEY =`abc86ef081a3bbbe814ba0a6b118df7d`
const BASE_URL =`api.openweathermap.org/data/2.5/`

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL +infoType)
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return fetch(url) .then((res) => res.json())
};

const formatCurrent = (data) => {
    const{ coord: {lat, lon}, 
    main:{temp, feels_like, temp_min, temp_max, humidity},
    name, dt, sys:{country, sunrise, sunset}
    } = data
}

const getFormattedWeatherData = async(searchParams) => {
    const FormatedCurrentWeather = await getWeatherData('weather', searchParams)
    .then
}
