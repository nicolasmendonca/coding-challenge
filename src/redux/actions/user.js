import { API_CURRENT_USER_URL } from '../../environment';
import { FETCH_USER_INFO } from '../types';

export const fetchUserInfo = () => ( dispatch, _, api ) => dispatch( {
	type: FETCH_USER_INFO,
	promise: api.get( API_CURRENT_USER_URL )
} );