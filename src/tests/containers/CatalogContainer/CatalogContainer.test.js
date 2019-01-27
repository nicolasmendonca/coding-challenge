import React from 'react';
import CatalogContainer from '../../../containers/CatalogContainer/CatalogContainer';
import Catalog from '../../../components/Catalog/Catalog';
import mountWithStore from '../../utils/mountWithStore';
import store, { initialState } from '../../utils/mockStore';
import { FETCH_USER_INFO, FETCH_PRODUCTS_CATALOG } from '../../../redux/types';

describe( 'CatalogContainer', () => {
	const component = mountWithStore(
		<CatalogContainer />
	);
	it( 'renders a Catalog component', () => {
		expect( component.find( Catalog ).exists() ).toBeTruthy();
	} );

	describe( 'when mounted', () => {
		beforeAll( () => {
			component.mount();
		} );

		it( 'fetches the user info', () => {
			expect( store.getActions().find( action => action.type === FETCH_USER_INFO ) ).toBeTruthy();
		} );

		it( 'fetches the products catalog', () => {
			expect( store.getActions().find( action => action.type === FETCH_PRODUCTS_CATALOG ) ).toBeTruthy();
		} );

		it( 'passes down the Catalog required props', () => {
			expect( component.find( Catalog ).prop( 'headerImage' ) ).toBe( 'header-x2.png' );
			expect( component.find( Catalog ).prop( 'products' ) ).toEqual( initialState.products.valueSeq().toArray().slice( 0, 1 ) );
			expect( component.find( Catalog ).prop( 'productsCount' ) ).toBe( initialState.products.size );
		} );
	} );
} );