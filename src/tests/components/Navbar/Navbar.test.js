import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../../components/Navbar/Navbar';

describe( 'Navbar', () => {
	const name = 'Bruce Wayne';
	const coins = 1500;
	const component = shallow(
		<Navbar name={name} coins={coins} />
	);

	it( 'renders the name of the user', () => {
		expect( component.text() ).toContain( name );
	} );

	it( 'renders the user\'s points', () => {
		expect( component.text() ).toContain( coins );
	} );
} );