import React, {Component} from 'react';
import './App.sass';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import FormDataContainer from "./components/Content/FormData/FormDataContainer";
import WeatherInfoContainer from "./components/Content/WeatherInfo/WeatherInfoContainer";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <FormDataContainer/>
                    <WeatherInfoContainer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;