import { UPDATE_COIN_AMOUNT } from '../types';

const initialState = 0;
export const coins = ( state = initialState, action ) => {
	switch ( action.type ) {
		case UPDATE_COIN_AMOUNT:
			return action.payload.amount;
		default:
			return state;
	}
}