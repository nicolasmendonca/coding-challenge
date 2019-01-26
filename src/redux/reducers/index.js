import { combineReducers } from 'redux';
import * as currentUser from './user';
import * as products from './products';
import * as coins from './coins';

export default combineReducers( {
	...currentUser,
	...products,
	...coins,
} );
