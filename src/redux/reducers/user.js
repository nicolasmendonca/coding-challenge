import { FETCH_USER_INFO, REDEEM_PRODUCT } from '../types';
import { handleSuccess } from '../packUtils';
import CurrentUser from '../../entities/currentUser';

const initialState = false;
export const currentUser = ( state = initialState, action ) => {
	switch ( action.type ) {
		case FETCH_USER_INFO:
			return handleSuccess( state, action, () => CurrentUser.fromJSON( action.payload ) )
		case REDEEM_PRODUCT:
			return handleSuccess( state, action, prevState => prevState.addPoints( - action.meta.product.cost ) )
		default:
			return state;
	}
};
