import { currentUser } from '../../../redux/reducers/user';
import { makeSuccessPackAction } from '../../utils/makePackAction';
import { FETCH_USER_INFO, REDEEM_PRODUCT, ADD_COINS } from '../../../redux/types';
import CurrentUser from '../../../entities/currentUser';

const userProperties = {
	_id: 123,
	redeemHistory: [],
	points: 2000,
	name: 'John Doe',
	createDate: new Date()
};

describe( 'currentUser', () => {
	describe( 'unhandled action', () => {
		const state = currentUser( undefined, { type: 'UNHANDLED' } );

		it( 'returns the initialState', () => {
			expect( state ).toBe( false );
		} );
	} );

	describe( 'FETCH_USER_INFO', () => {
		const payload = userProperties;
		const action = makeSuccessPackAction(
			FETCH_USER_INFO,
			payload	
		)
		const state = currentUser( undefined, action );

		it( 'stores the current user data', () => {
			expect( state ).toBeInstanceOf( CurrentUser );
			expect( state ).toEqual( CurrentUser.fromJSON( payload ) );
		} );
	} );

	describe( 'REDEEM_PRODUCT', () => {
		const action = makeSuccessPackAction(
			REDEEM_PRODUCT,
			false,
			{ product: { cost: 200 } }
		)
		const state = currentUser( CurrentUser.fromJSON( userProperties ), action );

		it( 'removes the user\'s points', () => {
			expect( state ).toBeInstanceOf( CurrentUser );
			expect( state.points ).toBe( userProperties.points - 200 );
		} );
	} );

	describe( 'ADD_COINS', () => {
		const action = makeSuccessPackAction(
			ADD_COINS,
			false,
			{ amount: 200 }
		)
		const state = currentUser( CurrentUser.fromJSON( userProperties ), action );

		it( 'adds the user\'s points', () => {
			expect( state ).toBeInstanceOf( CurrentUser );
			expect( state.points ).toBe( userProperties.points + 200 );
		} );
	} );
} );