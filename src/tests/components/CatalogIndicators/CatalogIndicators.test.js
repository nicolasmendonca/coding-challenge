import React from 'react';
import { shallow } from 'enzyme';
import CatalogIndicators from '../../../components/CatalogIndicators/CatalogIndicators';
import ItemsDisplayedContainer from '../../../containers/ItemsDisplayedContainer/ItemsDisplayedContainer';
import SortConditionSelectorContainer from '../../../containers/SortConditionSelectorContainer/SortConditionSelectorContainer';

describe( 'CatalogIndicators', () => {
	const component = shallow( <CatalogIndicators /> );

	it( 'renders the ItemsDisplayed component', () => {
		expect( component.find( ItemsDisplayedContainer ).exists() ).toBeTruthy();
	} );

	it( 'renders the SortConditionSelector component', () => {
		expect( component.find( SortConditionSelectorContainer ).exists() ).toBeTruthy();
	} );
} );
