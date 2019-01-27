import React from 'react';
import ItemsDisplayedContainer from '../../../containers/ItemsDisplayedContainer/ItemsDisplayedContainer';
import mountWithStore from '../../utils/mountWithStore';
import ItemsDisplayed from '../../../components/ItemsDisplayed/ItemsDisplayed';

describe( 'ItemsDisplayedContainer', () => {
	const component = mountWithStore(
		<ItemsDisplayedContainer />
	);
	it( 'renders a ItemsDisplayed component', () => {
		expect( component.find( ItemsDisplayed ).exists() ).toBeTruthy();
	} );
} );