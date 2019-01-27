import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../../components/Navbar/Navbar';
import { Coins } from '../../../components/Navbar/styledComponents';

describe( 'Navbar', () => {
	const name = 'Bruce Wayne';
	const coins = 1500;
	const onCoinsAdd = jest.fn();
	const component = shallow(
		<Navbar onCoinsAdd={onCoinsAdd} name={name} coins={coins} />
	);

	it( 'renders the name of the user', () => {
		expect( component.text() ).toContain( name );
	} );

	it( 'renders the user\'s points', () => {
		expect( component.text() ).toContain( coins );
	} );

	describe( 'when the user add coins', () => {
		beforeAll( () => {
			component.find( Coins ).prop( 'onClick' )();
		} );

		it( 'calls the onCoinsAdd prop', () => {
			expect( onCoinsAdd ).toHaveBeenCalledWith( 1000 )
		} );
	} );
} );