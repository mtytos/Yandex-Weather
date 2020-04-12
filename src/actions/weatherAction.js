export const putWeatherData = (weather, main, wind) => {
    return {
        type: 'PUT_WEATHER_DATA',
        weather,
        main,
        wind
    }
};

export const throwErr = () => {
    return {
        type: 'ERROR'
    }
};