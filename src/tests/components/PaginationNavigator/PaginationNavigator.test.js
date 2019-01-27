import React from 'react';
import { shallow } from 'enzyme';
import PaginationNavigator from '../../../components/PaginationNavigator/PaginationNavigator';
import { Button } from '../../../components/PaginationNavigator/styledComponents';

describe( 'PaginationNavigator', () => {
	const onPrevPageClicked = jest.fn();
	const onNextPageClicked = jest.fn();
	const prevPageIsAvailable = true;
	const nextPageIsAvailable = true;
	const component = shallow(
		<PaginationNavigator
			onPrevPageClicked={onPrevPageClicked}
			onNextPageClicked={onNextPageClicked}
			prevPageIsAvailable={prevPageIsAvailable}
			nextPageIsAvailable={nextPageIsAvailable}
		/>
	);

	it( 'renders both Button icons component', () => {
		expect( component.find( Button ) ).toHaveLength( 2 );
	} );

	describe( 'when the PREV button is clicked', () => {
		beforeAll( () => {
			component.find( Button ).at( 0 ).simulate( 'click' );
		} );

		afterAll( () => {
			onPrevPageClicked.mockClear();
		} );

		it( 'calls the onPrevPageClicked prop function', () => {
			expect( onPrevPageClicked ).toHaveBeenCalled();
		} );
	} );
	describe( 'when the NEXT button is clicked', () => {
		beforeAll( () => {
			component.find( Button ).at( 1 ).simulate( 'click' );
		} );

		afterAll( () => {
			onNextPageClicked.mockClear();
		} );

		it( 'calls the onNextPageClicked prop function', () => {
			expect( onNextPageClicked ).toHaveBeenCalled();
		} );
	} );
} );