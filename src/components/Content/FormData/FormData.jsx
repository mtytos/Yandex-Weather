import React from "react";
import style from "./FormData.module.sass";

const FormData = (props) => {

    return (
        <div className={style.formDataContent}>
            <input type="text" onChange={props.handleChange}/>
            <button onClick={props.getWeatherInfo}>Send</button>
        </div>
    )
};

export default FormData;