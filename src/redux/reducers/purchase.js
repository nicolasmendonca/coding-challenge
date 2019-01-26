import { Map } from 'immutable';
import { handleSuccess } from '../packUtils';
import Purchase from '../../entities/purchase';
import { REDEEM_PRODUCT } from '../types';

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