import { Map } from 'immutable';
import { messages } from '../../../redux/reducers/messages';
import { HIDE_SUCCESS_REDEEM_MESSAGE, REDEEM_PRODUCT } from '../../../redux/types';
import { makeStartPackAction } from '../../utils/makePackAction';

describe( 'messages', () => {
	describe( 'default state', () => {
		const state = messages( undefined, { type: 'UNHANDLED' } );

		it( 'does not contain any messages', () => {
			expect( state.get( 'REDEEM_SUCCESS' ) ).toBe( false )
		} );
	} );

	describe( 'HIDE_SUCCESS_REDEEM_MESSAGE', () => {
		const initialState = new Map( [ [ 'REDEEM_SUCCESS', true ] ] )
		const state = messages( initialState, { type: HIDE_SUCCESS_REDEEM_MESSAGE } );

		it( 'hides the current shown message', () => {
			expect( state.get( 'REDEEM_SUCCESS' ) ).toBe( false )
		} );
	} );

	describe( 'REDEEM_PRODUCT', () => {
		const initialState = new Map( [ [ 'REDEEM_SUCCESS', false ] ] )

		const action = makeStartPackAction( REDEEM_PRODUCT, false, {
			initialCoins: 2000,
			product: {
				cost: 200
			},
		} );
		const state = messages( initialState, action );

		it( 'hides the current shown message', () => {
			expect( state.get( 'REDEEM_SUCCESS' ) ).toEqual( {
				title: 'The product has been reedemed!',
				cost: 200,
				initialCoins: 2000,
			} )
		} );
	} );
} );