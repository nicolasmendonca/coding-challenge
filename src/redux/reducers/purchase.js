import { Map } from 'immutable';

import Purchase from '../../entities/purchase';
import { REDEEM_PRODUCT } from '../types';
import { handleSuccess } from '../../lib/packUtils';

const purchaseInitialState = new Map();
export const purchase = ( state = purchaseInitialState, action ) => {
	switch ( action.type ) {
	case REDEEM_PRODUCT:
		return handleSuccess(
			state,
			action,
			prevState => prevState.update(
				 action.meta.product.id,
				 purchase => ( purchase
					? purchase.addOne()
					: new Purchase( action.meta.product )) )
		);
	default:
		return state;
	}
}