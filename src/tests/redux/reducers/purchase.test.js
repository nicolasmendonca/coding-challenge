import { Map } from 'immutable';
import { purchase } from '../../../redux/reducers/purchase';
import { makeSuccessPackAction } from '../../utils/makePackAction';
import { REDEEM_PRODUCT } from '../../../redux/types';
import Purchase from '../../../entities/purchase';


describe( 'purchase', () => {
	describe( 'unhandled action', () => {
		const state = purchase( undefined, { type: 'UNHANDLED' } );
		it( 'returns an empty map as initial state', () => {
			expect( Map.isMap( state ) ).toBeTruthy();
		} );
	} );

	describe( 'REDEEM_PRODUCT action', () => {
		const meta = { product: { id: 1 } }
		const action = makeSuccessPackAction( REDEEM_PRODUCT, false, meta )
		const state = purchase( undefined, action );
		it( 'stores the given purchase', () => {
			expect( state.get( 1 ) ).toBeInstanceOf( Purchase );
		} );
	} );
} );