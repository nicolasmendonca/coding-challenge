import * as coins from './coins';
import * as user from './user';
import * as products from './products';

export default {
	...user,
	...coins,
	...products,
};