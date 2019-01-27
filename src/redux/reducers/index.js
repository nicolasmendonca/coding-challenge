import { combineReducers } from 'redux';
import * as currentUser from './user';
import * as products from './products';
import * as purchase from './purchase';
import * as messages from './messages';
import * as theme from './theme';

export default combineReducers( {
	...currentUser,
	...products,
	...purchase,
	...messages,
	...theme,
} );
