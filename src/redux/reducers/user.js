import { FETCH_USER_INFO, REDEEM_PRODUCT, ADD_COINS } from '../types';
import { handleSuccess, makeAsyncActionReducer } from '../packUtils';
import CurrentUser from '../../entities/currentUser';

export const addCoinsRequest = makeAsyncActionReducer( ADD_COINS );

const initialState = false;
export const currentUser = ( state = initialState, action ) => {
	switch ( action.type ) {
		case FETCH_USER_INFO:
			return handleSuccess( state, action, () => CurrentUser.fromJSON( action.payload ) )
		case REDEEM_PRODUCT:
			return handleSuccess( state, action, prevState => prevState.addPoints( - action.meta.product.cost ) )
		case ADD_COINS:
			return handleSuccess( state, action, prevState => prevState.addPoints( action.meta.amount ) )
		default:
			return state;
	}
};
