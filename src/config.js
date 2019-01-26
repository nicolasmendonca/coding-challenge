import PropTypes from 'prop-types';

// Products catalog
export const initialPage = 1;
export const amountOfPagesToShow = 2;

export const PRODUCTS_SORT = Object.freeze( {
	MOST_RECENT: {
		id: 'MOST_RECENT',
		displayName: 'Most recent',
		sortCondition: ( productA, productB ) => productA.id < productB.id ? -1 : 1,
	},
	LOWEST_PRICE: {
		id: 'LOWEST_PRICE',
		displayName: 'Lowest price',
		sortCondition: ( productA, productB ) => + productA.cost - productB.cost,
	},
	HIGHEST_PRICE: {
		id: 'HIGHEST_PRICE',
		displayName: 'Highest price',
		sortCondition: ( productA, productB ) => - productA.cost + productB.cost,
	},
} );

export const PRODUCTS_SORT_KEY_OPTIONS = Object.keys( PRODUCTS_SORT );
export const PRODUCTS_SORT_OPTIONS = Object.values( PRODUCTS_SORT );

export const productsSortPropType = PropTypes.shape( {
	id: PropTypes.string,
	displayName: PropTypes.string,
	sortCondition: PropTypes.func,
} );