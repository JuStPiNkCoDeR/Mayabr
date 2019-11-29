import { SET_FILTER } from '../actions/types';

const initialState = {
    tempFilter: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_FILTER:
            const temperature = action.filter.temperature;
            return {
                ...state,
                tempFilter: temperature
            };
        default:
            return state;
    }
}