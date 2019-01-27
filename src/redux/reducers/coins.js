import { UPDATE_COIN_AMOUNT, ADD_COINS } from '../types';
import { handleSuccess } from '../packUtils';

const initialState = 0;
export const coins = ( state = initialState, action ) => {
	switch ( action.type ) {
		case UPDATE_COIN_AMOUNT:
			return action.payload.amount;
		case ADD_COINS:
			return handleSuccess( state, action, () => action.meta.newAmount );
		default:
			return state;
	}
}