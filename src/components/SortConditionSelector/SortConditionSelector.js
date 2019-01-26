import React from 'react';
import PropTypes from 'prop-types';
import { SortContainer, Button, SortBy } from './styledComponents';
import { productsSortPropType, PRODUCTS_SORT_KEY_OPTIONS } from '../../config';

const SortConditionSelector = ( {
	sortOptions, activeSortOption, onSortOptionChange
} ) => (
	<SortContainer>
		<SortBy>Sort by:</SortBy>
		{ sortOptions.map( sortOption => (
			<Button
				key={sortOption.id}
				onClick={() => onSortOptionChange( sortOption.id )}
				active={sortOption.id === activeSortOption}
			>
				<span>
					{ sortOption.displayName }
				</span>
			</Button>
		) ) }
	</SortContainer>
);

SortConditionSelector.propTypes = {
	sortOptions: PropTypes.arrayOf( productsSortPropType ).isRequired,
	activeSortOption: PropTypes.oneOf( PRODUCTS_SORT_KEY_OPTIONS ).isRequired,
	onSortOptionChange: PropTypes.func.isRequired
}


export default SortConditionSelector;
