import { API_REDEEM_URL } from '../../environment';
import { REDEEM_PRODUCT } from '../types';
import { selectUserPoints } from '../selectors/user';

export const redeemProduct = product => ( dispatch, getState, api ) => dispatch( {
	type: REDEEM_PRODUCT,
	meta: { product, initialCoins: selectUserPoints(getState()) },
	promise: api.post( API_REDEEM_URL, { productId: product.id } ),
} );