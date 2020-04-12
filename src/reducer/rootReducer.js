const initState = {
    status: 0,
    greeting: ['Привет! Просто введи название города на английском и нажми на кнопку. А потом ты увидишь МАГИЮ :)'],
    tips: [
        '- Напиши назваие города на английском.',
        '- Не указывай лишних пробелов или символов.',
        '- Вводите название только существующего города.'
    ],
    errors: ['Что-то пошло не так, попробуй воспользоваться советами ниже:'],
    weather: [
        {
            main: ''
        }
    ],
    main: {
        temp: ''
    },
    wind: {
        speed: ''
    }
};

const rootReducer = (state = initState, action) => {

    if (action.type === 'PUT_WEATHER_DATA') {
        let newWeather = action.weather;
        let newMain = action.main;
        let newWind = action.wind;
        return {
            ...state,
            status: 2,
            weather: newWeather,
            main: newMain,
            wind: newWind
        }
    }
    if (action.type === 'ERROR') {
        return {
            ...state,
            status: 1
        }
    }
    return state;
};

export default rootReducer;