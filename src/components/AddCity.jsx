import React from 'react';
import { addCity, addWeather } from '../store/actions';
import {connect} from "react-redux";
import Searcher from '../js/searcher';
import {getCities} from "../store/selectors";
import getWeather from '../js/weather';

class AddCity extends React.Component{
    constructor(props) {
        super(props);
        this.dataList = React.createRef();
        this.state = {
            city: ''
        };
    }

    handleInputChange(event) {
        let value = event.currentTarget.value;
        this.dataList.current.innerHTML = '';

        try {
            let closestCities = Searcher.searchRaw(value);
            this.setState({
                city: value
            });

            closestCities.forEach((city) => {
                let option = document.createElement('option');
                option.value = city;
                this.dataList.current.insertAdjacentElement('afterbegin', option);
            })
        } catch (e) {
            console.log(e);
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        let chosenCityLowerCase = this.state.city.toLowerCase();
        let completeCityName = chosenCityLowerCase.charAt(0).toUpperCase().concat(chosenCityLowerCase.slice(1));

        if (Searcher.isExist(completeCityName)) {
            let trackedCitiesAmount = this.props.trackedCities.size;
            this.props.addCity(completeCityName);
            let currentTrackedCitiesAmount =  this.props.trackedCities.size;

            if (trackedCitiesAmount < currentTrackedCitiesAmount) {
                let weather = getWeather();

                this.props.addWeather(completeCityName, weather)
            }
        } else {
            console.log('Город не найден!');
        }
    }

    render() {
         return(
             <div className="addCityBlock">
                 <form onSubmit={(e) => this.handleSubmit(e)}>
                     <input required pattern="[А-Яа-я-]+" list="closest-cities" placeholder="Введите новый город..." onChange={(e) => this.handleInputChange(e)}/>
                     <datalist ref={this.dataList} id="closest-cities"></datalist>
                     <button className='plusIcon'/>
                 </form>
             </div>
         )
    }
}

const mapStateToProps = state => ({
    trackedCities: getCities(state)
});

export default connect(
    mapStateToProps,
    { addCity, addWeather }
)(AddCity);
