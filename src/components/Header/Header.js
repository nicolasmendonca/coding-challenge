import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Container, H1, Img } from './styledComponents';

const Header = ( { name, image, theme } ) => (
	<Container image={image}>
		<H1>{name}</H1>
		<Img src={theme.electronicsHeaderImage} alt=""/>
	</Container>
);

Header.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}

export default withTheme( Header );