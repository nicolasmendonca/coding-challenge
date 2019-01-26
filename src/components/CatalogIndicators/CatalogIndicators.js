import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styledComponents';
import ItemsDisplayedContainer from '../../containers/ItemsDisplayedContainer/ItemsDisplayedContainer';
import SortConditionSelectorContainer from '../../containers/SortConditionSelectorContainer/SortConditionSelectorContainer';


const CatalogIndicators = () => (
	<Container>
		<ItemsDisplayedContainer />
		<SortConditionSelectorContainer />
	</Container>
);

CatalogIndicators.propTypes = {
	productsCount: PropTypes.number,
	productsShown: PropTypes.number,
};

CatalogIndicators.defaultProps = {
	productsCount: 0,
	productsShown: 0,
}

export default CatalogIndicators;
