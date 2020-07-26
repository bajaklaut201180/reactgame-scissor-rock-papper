import { combineReducers } from 'redux';
import pointReducers from './pointReducers';

export default combineReducers({
  point: pointReducers
});