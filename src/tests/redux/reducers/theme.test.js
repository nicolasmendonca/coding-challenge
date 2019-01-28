import { theme } from '../../../redux/reducers/theme';
import mainTheme from '../../../styles/mainTheme';
import { CHANGE_CURRENT_THEME } from '../../../redux/types';
import darkTheme from '../../../styles/darkTheme';

describe( 'theme', () => {
	describe( 'unhandled action', () => {
		const state = theme( undefined, { type: 'UNHANDLED' } );

		it( 'returns the initialState', () => {
			expect( state ).toEqual( mainTheme );
		} );
	} );

	describe( 'CHANGE_CURRENT_THEME', () => {
		const state = theme( undefined, { type: CHANGE_CURRENT_THEME } );

		it( 'changes the theme to the oposite', () => {
			expect( state ).toEqual( darkTheme );
		} );

		describe( 'CHANGE_CURRENT_THEME after changed', () => {
			const newState = theme( state, { type: CHANGE_CURRENT_THEME } );
			it( 'sets the theme to the mainTheme', () => {
				expect( newState ).toEqual( mainTheme );
			} );
		} );
	} );
} );