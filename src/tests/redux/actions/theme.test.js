import { toggleTheme } from '../../../redux/actions/theme';
import { CHANGE_CURRENT_THEME } from '../../../redux/types';

describe( 'theme', () => {
	describe( 'toggleTheme', () => {
		const action = toggleTheme();

		it( 'contains the valid action type', () => {
			expect( action ).toEqual( { type: CHANGE_CURRENT_THEME } );
		} );
	} );
} );