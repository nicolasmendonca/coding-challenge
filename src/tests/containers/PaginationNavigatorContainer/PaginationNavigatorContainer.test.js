import React from 'react';
import PaginationNavigatorContainer from '../../../containers/PaginationNavigatorContainer/PaginationNavigatorContainer';
import mountWithStore from '../../utils/mountWithStore';
import PaginationNavigator from '../../../components/PaginationNavigator/PaginationNavigator';
import store from '../../utils/mockStore';
import { CHANGE_PRODUCTS_CATALOG_PAGE } from '../../../redux/types';

describe( 'PaginationNavigatorContainer', () => {
	const scrollIntoView = jest.fn();
	const querySelector = jest.fn( () => ( { scrollIntoView } ) );
	document.querySelector = querySelector;
	const component = mountWithStore(
		<PaginationNavigatorContainer/>
	);

	it( 'renders without errors', () => {
		expect( component ).toBeTruthy();
	} );

	it( 'renders a PaginationNavigator', () => {
		expect( component.find( PaginationNavigator ).exists() ).toBeTruthy();
	} );

	describe( 'when the user navigates to the previous page', () => {
		beforeAll( () => {
			store.clearActions();
			component.find( PaginationNavigator ).prop( 'onPrevPageClicked' )();
		} );

		it( 'dispatches an CHANGE_PRODUCTS_CATALOG_PAGE action with the new page', () => {
			expect( store.getActions()[ 0 ] ).toBeTruthy();
			expect( store.getActions()[ 0 ].payload.page ).toBe( 0 );
		} );

		it( 'scrolls to find the .Catalog element', () => {
			expect( querySelector ).toHaveBeenCalledWith( '.Catalog' );
			expect( scrollIntoView ).toHaveBeenCalled();
		} );
	} );

	describe( 'when the user navigates to the next page', () => {
		beforeAll( () => {
			store.clearActions();
			component.find( PaginationNavigator ).prop( 'onNextPageClicked' )();
		} );

		it( 'dispatches an CHANGE_PRODUCTS_CATALOG_PAGE action with the new page', () => {
			expect( store.getActions()[ 0 ] ).toBeTruthy();
			expect( store.getActions()[ 0 ].payload.page ).toBe( 2 );
		} );

		it( 'scrolls to find the .Catalog element', () => {
			expect( querySelector ).toHaveBeenCalledWith( '.Catalog' );
			expect( scrollIntoView ).toHaveBeenCalled();
		} );
	} );
} );