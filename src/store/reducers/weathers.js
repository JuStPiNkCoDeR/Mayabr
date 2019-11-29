import { ADD_WEATHER, DELETE_TRACKED_WEATHER } from '../actions/types';

const initialState = {
    trackedWeathers: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case ADD_WEATHER:
            const { city, weather } = action.data;
            return {
                ...state,
                trackedWeathers: [...state.trackedWeathers, {
                    city: city,
                    weather: weather
                }]
            };
        case DELETE_TRACKED_WEATHER:
            const index = action.weatherIndex;
            let weathers = state.trackedWeathers;
            weathers.splice(index, 1);
            return {
                ...state,
                trackedWeathers: [...weathers]
            };
        default:
            return state;
    }
}