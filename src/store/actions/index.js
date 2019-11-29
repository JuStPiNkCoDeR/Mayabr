import {ADD_CITY, ADD_WEATHER, SET_FILTER, DELETE_TRACKED_CITY, DELETE_TRACKED_WEATHER} from './types';

// ID городов
let cityID = 0;

// Добавление города к просматриваемым
export const addCity = content => ({
    type: ADD_CITY,
    content
});

//Добавляем отслеживаемую погоду
export const addWeather = (city, weather) => ({
   type: ADD_WEATHER,
   data: {
       city: city,
       weather
   }
});

//Добавляем фильтр
export const setFilter = filter => ({
   type: SET_FILTER,
   filter
});

//Удалить город из слежки
export const deleteTrackedCity = city => ({
   type: DELETE_TRACKED_CITY,
   city
});

//Удалить погоду из слежки
export const deleteTrackedWeather = weatherIndex => ({
    type: DELETE_TRACKED_WEATHER,
    weatherIndex
});