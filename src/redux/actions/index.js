import * as coins from './coins';
import * as user from './user';
import * as products from './products';
import * as purchase from './purchase';
import * as messages from './messages';
import * as theme from './theme';

export default {
	...user,
	...coins,
	...products,
	...purchase,
	...messages,
	...theme,
};