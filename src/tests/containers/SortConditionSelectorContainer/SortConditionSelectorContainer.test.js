import React from 'react';
import SortConditionSelectorContainer from '../../../containers/SortConditionSelectorContainer/SortConditionSelectorContainer';
import mountWithStore from '../../utils/mountWithStore';
import store from '../../utils/mockStore';
import SortConditionSelector from '../../../components/SortConditionSelector/SortConditionSelector';
import { CHANGE_PRODUCTS_SORT_OPTION } from '../../../redux/types';
import { PRODUCTS_SORT_OPTIONS, PRODUCTS_SORT } from '../../../config';

describe( 'SortConditionSelectorContainer', () => {
	const component = mountWithStore(
		<SortConditionSelectorContainer />
	);

	it( 'renders without errors', () => {
		expect( component ).toBeTruthy();
	} );

	describe( 'when the user changes the sort option', () => {
		beforeAll( () => {
			store.clearActions();
			component.find( SortConditionSelector ).prop( 'onSortOptionChange' )();
		} );

		it( 'dispatches an CHANGE_PRODUCTS_SORT_OPTION action', () => {
			expect( store.getActions()[ 0 ].type ).toBe( CHANGE_PRODUCTS_SORT_OPTION )
		} );

	} );

	it( 'passes down the sort options props', () => {
		expect( component.find( SortConditionSelector ).prop( 'sortOptions' ) ).toEqual( PRODUCTS_SORT_OPTIONS );
		expect( component.find( SortConditionSelector ).prop( 'activeSortOption' ) ).toEqual( PRODUCTS_SORT.LOWEST_PRICE.id );
	} );


} );

