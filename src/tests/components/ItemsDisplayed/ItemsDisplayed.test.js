import React from 'react';
import { shallow } from 'enzyme';
import ItemsDisplayed from '../../../components/ItemsDisplayed/ItemsDisplayed';
import { ResultCount } from '../../../components/ItemsDisplayed/styledComponents';

describe( 'ItemsDisplayed', () => {
	const productsShown = 10;
	const productsCount = 20;

	const component = shallow( <ItemsDisplayed productsShown={productsShown} productsCount={productsCount}/> );

	it( 'renders the amount of products', () => {
		expect( component.find( ResultCount ).text() ).toContain( `${productsShown} of ${productsCount} products` );
	} );
} );
