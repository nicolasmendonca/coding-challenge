import mainTheme from '../../styles/mainTheme';
import darkTheme from '../../styles/darkTheme';
import { CHANGE_CURRENT_THEME } from '../types';

const themeInitialState = mainTheme;
export const theme = ( state = themeInitialState, action ) => {
	switch ( action.type ) {
	case CHANGE_CURRENT_THEME:
		return state.id === 'light' ? darkTheme : mainTheme;
	default:
		return state;
	}
}