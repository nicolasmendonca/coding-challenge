import { Map } from 'immutable';
import { handle } from 'redux-pack';
import { HIDE_SUCCESS_REDEEM_MESSAGE, REDEEM_PRODUCT } from '../types';

const messagesInitialState = new Map( [
	[ 'REDEEM_SUCCESS', false ]
] );
export const messages = ( state = messagesInitialState, action ) => {
	switch ( action.type ) {
	case HIDE_SUCCESS_REDEEM_MESSAGE:
		return state.set( 'REDEEM_SUCCESS', false )
	case REDEEM_PRODUCT:
		return handle( state, action, { start: prevState => prevState.set( 'REDEEM_SUCCESS', {
			title: 'The product has been reedemed!',
			cost: action.meta.product.cost,
			initialCoins: action.meta.initialCoins,
		} ) } );
	default:
		return state;
	}
}