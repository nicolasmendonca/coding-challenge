import React from 'react';
import renderer from 'react-test-renderer'
import { ShopBlueIcon } from '../../../components/ShopBlueIcon/ShopBlueIcon';

describe( 'ShopBlueIcon', () => {
	const primaryColor = "#ffffff";

	it( 'matches the snapshot', () => {
		const tree = renderer.create( <ShopBlueIcon primaryColor={primaryColor} /> ).toJSON();
		expect( tree ).toMatchSnapshot();
	} );
} );