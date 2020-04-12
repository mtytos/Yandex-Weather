import React, {Component} from "react";
import {connect} from 'react-redux';
import FormData from "./FormData";
import axios from "axios";
import {apiGetWeather, appid, units} from "../../../services/api";
import {putWeatherData, throwErr} from "../../../actions/weatherAction";

class FormDataContainer extends Component {

    state = {
        cityName: ''
    };

    handleChange = (e) => {
        this.setState({
            cityName: e.target.value
        });
    };

    getWeatherInfo = () => {
        let cityName = this.state.cityName;
        axios.get(apiGetWeather, {
            params: {
                q: cityName,
                units,
                appid
            }
        })
            .then((res) => {
                this.props.putWeatherData(res.data.weather, res.data.main, res.data.wind);
            })
            .catch((err) => {
                console.log(err);
                this.props.throwErr();
            })
    };

    render() {
        return (
            <div>
                <FormData handleChange={this.handleChange} getWeatherInfo={this.getWeatherInfo}
                          weather={this.props.weather}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.status,
        weather: state.weather,
        main: state.main,
        wind: state.wind
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        putWeatherData: (weather, main, wind) => {dispatch(putWeatherData(weather, main, wind))},
        throwErr: () => {dispatch(throwErr())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDataContainer);