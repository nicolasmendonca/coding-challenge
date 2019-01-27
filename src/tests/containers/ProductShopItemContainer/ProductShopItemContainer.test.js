import React from 'react';
import ProductShopItemContainer from '../../../containers/ProductShopItemContainer/ProductShopItemContainer';
import mountWithStore from '../../utils/mountWithStore';
import ShopItem from '../../../components/ShopItem/ShopItem';
import store, { initialState } from '../../utils/mockStore';
import { REDEEM_PRODUCT } from '../../../redux/types';

describe( 'ProductShopItemContainer', () => {
	const component = mountWithStore(
		<ProductShopItemContainer product={initialState.products.get( 1 )}/>
	);

	it( 'renders without errors', () => {
		expect( component ).toBeTruthy();
	} );

	it( 'renders a ShopItem', () => {
		expect( component.find( ShopItem ).exists() ).toBeTruthy();
	} );

	describe( 'when the user redeems the product', () => {
		beforeAll( () => {
			store.clearActions();
			component.find( ShopItem ).prop( 'onRedeem' )();
		} );

		it( 'dispatches an REDEEM_PRODUCT action', () => {
			expect( store.getActions()[ 0 ].type ).toBe( REDEEM_PRODUCT );
		} );
	} );
} );

