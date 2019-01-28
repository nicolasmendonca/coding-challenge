import store from '../../utils/mockStore';
import apiMock from '../../utils/apiMock';
import { fetchUserInfo, updateCoinAmount, addCoins } from '../../../redux/actions/user';
import { FETCH_USER_INFO, UPDATE_COIN_AMOUNT, ADD_COINS } from '../../../redux/types';
import { API_CURRENT_USER_URL, API_POINTS_URL } from '../../../environment';

describe( 'user', () => {
	
	afterEach( () => {
		store.clearActions();
		apiMock.get.mockClear();
		apiMock.post.mockClear();
	} );

	describe( 'fetchUserInfo', () => {
		beforeAll( () => {
			store.dispatch( fetchUserInfo() );
		} );

		it( 'contains the right type, meta, and api call', () => {
			const action = store.getActions()[ 0 ];
			expect( action.type ).toBe( FETCH_USER_INFO );
			expect( apiMock.get ).toHaveBeenCalledWith( API_CURRENT_USER_URL );
		} );
	} );

	describe( 'updateCoinAmount', () => {
		beforeAll( () => {
			store.dispatch( updateCoinAmount( 200 ) );
		} );

		it( 'contains the right type, meta, and api call', () => {
			const action = store.getActions()[ 0 ];
			expect( action.type ).toBe( UPDATE_COIN_AMOUNT );
			expect( action.payload ).toEqual( { amount: 200 } );
		} );
	} );

	describe( 'addCoins', () => {
		beforeAll( () => {
			store.dispatch( addCoins( 200 ) );
		} );

		it( 'contains the right type, meta, and api call', () => {
			const action = store.getActions()[ 0 ];
			expect( action.type ).toBe( ADD_COINS );
			expect( action.meta ).toEqual( {
				amount: 200,
				newAmount: 2200
			} );
			expect( apiMock.post ).toHaveBeenCalledWith( API_POINTS_URL, { amount: 200 } );
		} );
	} );
} );