import { FETCH_USER_INFO } from '../types';
import { handleSuccess } from '../packUtils';
import CurrentUser from '../../entities/currentUser';

const initialState = false;
export const currentUser = ( state = initialState, action ) => {
	switch ( action.type ) {
		case FETCH_USER_INFO:
			return handleSuccess( state, action, () => CurrentUser.fromJSON( action.payload ) )
		default:
			return state;
	}
};
