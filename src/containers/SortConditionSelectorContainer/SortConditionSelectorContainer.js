import React from 'react';
import PropTypes from 'prop-types';
import SortConditionSelector from '../../components/SortConditionSelector/SortConditionSelector';
import { PRODUCTS_SORT_OPTIONS, PRODUCTS_SORT_KEY_OPTIONS } from '../../config';
import { connectComponent } from '../../redux/connectComponent';
import { selectProductSortID } from '../../redux/selectors/products';

const SortConditionSelectorContainer = ( { selectedSortOption, changeSortOption } ) => (
	<SortConditionSelector
		sortOptions={PRODUCTS_SORT_OPTIONS}
		activeSortOption={selectedSortOption}
		onSortOptionChange={changeSortOption}
	/>
);

SortConditionSelectorContainer.propTypes = {
	selectedSortOption: PropTypes.oneOf( PRODUCTS_SORT_KEY_OPTIONS ).isRequired
};

export default connectComponent( state => ( {
	selectedSortOption: selectProductSortID( state ),
} ) )( SortConditionSelectorContainer );
