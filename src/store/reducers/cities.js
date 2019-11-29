import { ADD_CITY, DELETE_TRACKED_CITY } from '../actions/types';

const initialState = {
    trackedCities: new Set()
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CITY:
            const city = action.content;
            return {
                ...state,
                trackedCities: state.trackedCities.add(city)
            };
        case DELETE_TRACKED_CITY:
            const deleteCity = action.city;
            const cities = state.trackedCities;
            cities.delete(deleteCity);
            return {
                ...state,
                trackedCities: cities
            };
        default:
            return state;
    }
}