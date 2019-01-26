import { UPDATE_COIN_AMOUNT } from '../types';

export const updateCoinAmount = ( amount ) => ( {
	type: UPDATE_COIN_AMOUNT,
	payload: { amount }
} )