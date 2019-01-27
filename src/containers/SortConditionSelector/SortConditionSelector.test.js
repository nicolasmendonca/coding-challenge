import React from 'react';
import { shallow } from 'enzyme';
import SortConditionSelector from '../../components/SortConditionSelector/SortConditionSelector';
import { SortContainer, Button } from '../../components/SortConditionSelector/styledComponents';

describe( 'SortConditionSelector', () => {

	const sortOptions = [
		{
			id: 'HIGEST_PRICE',
			displayName: 'Highest price'
		},
		{
			id: 'LOWEST_PRICE',
			displayName: 'Lowest price'
		},
	];
	const activeSortOption = 'LOWEST_PRICE';
	const onSortOptionChange = jest.fn();

	const component = shallow(
		<SortConditionSelector
			sortOptions={sortOptions}
			activeSortOption={activeSortOption}
			onSortOptionChange={onSortOptionChange}
		/>
	);

	it( 'renders a SortContainer component', () => {
		expect( component.find( SortContainer ).exists() ).toBeTruthy();
	} );

	it( 'contains the sortOptions mapped as Buttons', () => {
		component.find( Button ).forEach( ( button, index ) => {
			expect( button.text() ).toContain( sortOptions[ index ].displayName );
		} );
	} );

	it( 'shows the activeSortOption as active', () => {
		expect( component.find( Button ).at( 1 ).prop( 'active' ) ).toBeTruthy();
	} );

	describe( 'when the user changes the sort option', () => {
		beforeAll( () => {
			component.find( Button ).at( 0 ).simulate( 'click' );
		} );

		afterAll( () => {
			onSortOptionChange.mockClear();
		} )

		it( 'calls the onSortOptionChange with the desired sort id', () => {
			expect( onSortOptionChange ).toHaveBeenCalledTimes( 1 );
			expect( onSortOptionChange ).toHaveBeenCalledWith( 'HIGEST_PRICE' );
		} );
	} );
} );
