import React from 'react';
import PropTypes from 'prop-types';
import { ResultCount } from './styledComponents';

const ItemsDisplayed = ( { productsShown, productsCount } ) => (
	<ResultCount>
		{productsShown} of {productsCount} products
	</ResultCount>
)

ItemsDisplayed.propTypes = {
	productsShown: PropTypes.number,
	productsCount: PropTypes.number
};

ItemsDisplayed.defaultProps = {
	productsShown: 0,
	productsCount: 0
}

export default ItemsDisplayed;

