import { API_CURRENT_USER_URL, API_POINTS_URL } from '../../environment';
import { FETCH_USER_INFO, UPDATE_COIN_AMOUNT, ADD_COINS } from '../types';
import { selectUserPoints } from '../selectors/user';

export const fetchUserInfo = () => ( dispatch, _, api ) => dispatch( {
	type: FETCH_USER_INFO,
	promise: api.get( API_CURRENT_USER_URL )
} );

export const updateCoinAmount = ( amount ) => ( {
	type: UPDATE_COIN_AMOUNT,
	payload: { amount }
} );

export const addCoins = amount => ( dispatch, getState, api ) => dispatch( {
	type: ADD_COINS,
	meta: { amount, newAmount: selectUserPoints( getState() ) + amount },
	promise: api.post( API_POINTS_URL, { amount } )
} );