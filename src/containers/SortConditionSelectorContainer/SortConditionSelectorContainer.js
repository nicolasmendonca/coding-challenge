import React from 'react';
import SortConditionSelector from '../../components/SortConditionSelector/SortConditionSelector';
import { PRODUCTS_SORT_OPTIONS } from '../../config';
import { connectComponent } from '../../redux/connectComponent';
import { selectProductSortID } from '../../redux/selectors/products';

const SortConditionSelectorContainer = ( { selectedSortOption, changeSortOption } ) => (
	<SortConditionSelector
		sortOptions={PRODUCTS_SORT_OPTIONS}
		activeSortOption={selectedSortOption}
		onSortOptionChange={changeSortOption}
	/>
);

export default connectComponent( state => ( {
	selectedSortOption: selectProductSortID( state ),
} ) )( SortConditionSelectorContainer );
