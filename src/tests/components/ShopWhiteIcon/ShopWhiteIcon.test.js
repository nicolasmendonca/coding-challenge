import React from 'react';
import renderer from 'react-test-renderer'
import { ShopWhiteIcon } from '../../../components/ShopWhiteIcon/ShopWhiteIcon';

describe( 'ShopWhiteIcon', () => {
	const primaryColor = "#ffffff";

	it( 'matches the snapshot', () => {
		const tree = renderer.create( <ShopWhiteIcon primaryColor={primaryColor} /> ).toJSON();
		expect( tree ).toMatchSnapshot();
	} );
} );