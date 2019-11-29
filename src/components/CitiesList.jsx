import React from 'react';
import { getCities, getWeathers, getTempFilter } from '../store/selectors';
import {connect} from "react-redux";
import City from './City';
import Searcher from '../js/searcher';
import { deleteTrackedCity, deleteTrackedWeather } from '../store/actions';

class CitiesList extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTracked = this._deleteTracked.bind(this);
    }

    _deleteTracked(city) {
        this.props.deleteTrackedCity(city);

        let weatherIndex = -1;

        this.props.trackedWeathers.forEach((weather, index) => {
            if (weather.city === city) weatherIndex = index;
        });

        this.props.deleteTrackedWeather(weatherIndex);
    }

    render() {
        const trackedCities = this.props.trackedCities;
        const temperatureFilter = this.props.filter;
        let cities = [];

        let index = 0;
        trackedCities.forEach((city) => {
            let weather = Searcher.searchAtWeathers(city, this.props.trackedWeathers);

            if (weather.temperature >= temperatureFilter) {
                cities.push(<City key={index} city={city} weather={weather} handleDelete={this.deleteTracked}/>);
                index++;
            }
        });

        return(
            <div className="citiesList">
                {cities.map((city) => city)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trackedWeathers: getWeathers(state),
    trackedCities: getCities(state),
    filter: getTempFilter(state)
});

export default connect(
    mapStateToProps,
    { deleteTrackedCity, deleteTrackedWeather }
)(CitiesList);