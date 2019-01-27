import React from 'react';
import ThemeProviderContainer from '../../../containers/ThemeProviderContainer/ThemeProviderContainer';
import mountWithStore from '../../utils/mountWithStore';
import { ThemeChanger } from '../../../containers/ThemeProviderContainer/styledComponents';
import store from '../../utils/mockStore';
import { CHANGE_CURRENT_THEME } from '../../../redux/types';

describe( 'ThemeProviderContainer', () => {
	const component = mountWithStore(
		<ThemeProviderContainer>
			Some component
		</ThemeProviderContainer>
	);

	it( 'renders without errors', () => {
		expect( component ).toBeTruthy();
	} );

	it( 'renders the ThemeChanges component', () => {
		expect( ( component ).find( ThemeChanger ).exists() ).toBeTruthy();
	} );

	describe( 'when the user changes the theme', () => {
		beforeAll( () => {
			store.clearActions();
			component.find( ThemeChanger ).prop( 'onClick' )();
		} );

		it( 'dispatches an CHANGE_CURRENT_THEME action', () => {
			expect( store.getActions()[ 0 ].type ).toBe( CHANGE_CURRENT_THEME );
		} );
	} );
} );

