import { combineReducers } from 'redux';
import cities from './cities';
import weathers from './weathers';
import filters from './filters';

export default combineReducers({ cities, weathers, filters });