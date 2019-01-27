import React from 'react';
import { Container } from './styledComponents';
import ItemsDisplayedContainer from '../../containers/ItemsDisplayedContainer/ItemsDisplayedContainer';
import SortConditionSelectorContainer from '../../containers/SortConditionSelectorContainer/SortConditionSelectorContainer';


const CatalogIndicators = () => (
	<Container>
		<ItemsDisplayedContainer />
		<SortConditionSelectorContainer />
	</Container>
);

export default CatalogIndicators;
