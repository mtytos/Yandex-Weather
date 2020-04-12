import React from "react";
import style from "./WeatherInfo.module.sass";
import {simpleCore} from "../../../services/core";

const WeatherInfo = (props) => {

    const tips = props.tips.map((tip, i) =>
        <div key={i} className={style.tips}>
            <p>{tip}</p>
        </div>
    );

    const greeting = props.greeting.map((greet, i) =>
        <div key={i}>
            <p>{greet}</p>
        </div>
    );

    const errors = props.errors.map((err, i) =>
        <div key={i} className={style.err}>
            <p>{err}</p>
            {tips}
        </div>
    );

    const weather = (
        <div>
            <span className={style.dress}><p>{simpleCore(props.main.temp)}</p></span>
            <p>Температура по Цельсию - <b>{props.main.temp}</b></p>
            <p>Скорость ветра - <b>{props.wind.speed}</b></p>
            <p>На небе - <b>{props.weather[0].main}</b></p>
        </div>
    );

    return (
        <div className={style.weatherInfoContent}>
            {props.status === 0 ? greeting : (props.status === 1 ? errors : weather)}
        </div>
    )
};

export default WeatherInfo;