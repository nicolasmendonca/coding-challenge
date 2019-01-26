import headerLightImage from '../../assets/header-x2.png';
import headerDarkImage from '../../assets/header-x2-dark.png';
import { createSelector } from 'reselect';

export const selectCurrentTheme = state => state.theme;

export const selectHeaderImage = createSelector(
	[ selectCurrentTheme ],
	currentTheme => ( currentTheme.id === 'light'
		? headerLightImage
		: headerDarkImage )
)
