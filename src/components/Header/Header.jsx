import React from "react";
import style from "./Header.module.sass";

const Header = () => {
    return (
        <header className={style.header}>
            <p>Weather App created by Mtytos<br/>My implementation with React and Redux</p>
        </header>
    )
};

export default Header;