import React, {Component} from "react";
import {connect} from 'react-redux';
import WeatherInfo from "./WeatherInfo";

class WeatherInfoContainer extends Component {

    render() {
        return (
            <div>
                <WeatherInfo weather={this.props.weather} main={this.props.main}
                             wind={this.props.wind} status={this.props.status}
                             tips={this.props.tips} errors={this.props.errors} greeting={this.props.greeting}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.status,
        greeting: state.greeting,
        tips: state.tips,
        errors: state.errors,
        weather: state.weather,
        main: state.main,
        wind: state.wind
    }
};

export default connect(mapStateToProps)(WeatherInfoContainer);