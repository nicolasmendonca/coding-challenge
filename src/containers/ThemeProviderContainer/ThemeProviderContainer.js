import React, { Fragment } from 'react';
import darthVader from '../../assets/icons/darth-vader.png';
import luke from '../../assets/icons/luke.png';
import { ThemeProvider } from 'styled-components';
import { connectComponent } from '../../redux/connectComponent';
import { selectCurrentTheme } from '../../redux/selectors/theme';
import { ThemeChanger } from './styledComponents';

const themeToggle = {
	'light': { image: darthVader, alt: 'Join the dark side' },
	'dark': { image: luke, alt: 'I know there is still good in you' }
}

const ThemeProviderContainer = ( { children, theme, toggleTheme } ) => (
	<ThemeProvider theme={theme}>
		<Fragment>
			<ThemeChanger
				onClick={toggleTheme}
				src={themeToggle[ theme.id ].image}
				alt={ themeToggle[ theme.id ].alt }
			/>
			{ children }
		</Fragment>
	</ThemeProvider>
);

export default connectComponent( state => ( {
	theme: selectCurrentTheme( state )
} ) )( ThemeProviderContainer );
