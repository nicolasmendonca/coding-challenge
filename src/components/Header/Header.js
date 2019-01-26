import React from 'react';
import PropTypes from 'prop-types';
import { Container, H1 } from './styledComponents';

const Header = ( { name, image } ) => (
	<Container image={image}>
		<H1>{name}</H1>
	</Container>
);

Header.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}


export default Header;