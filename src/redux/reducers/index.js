import { combineReducers } from 'redux';
import * as coins from './coins';

export default combineReducers( {
	...coins
} );
