import { UPDATE_COIN_AMOUNT, ADD_COINS } from '../types';
import { API_POINTS_URL } from '../../environment';
import { selectUserPoints } from '../selectors/user';

export const updateCoinAmount = ( amount ) => ( {
	type: UPDATE_COIN_AMOUNT,
	payload: { amount }
} );

export const addCoins = amount => ( dispatch, getState, api ) => dispatch( {
	type: ADD_COINS,
	meta: { amount, newAmount: selectUserPoints( getState() ) + amount },
	promise: api.post( API_POINTS_URL, { amount } )
} );