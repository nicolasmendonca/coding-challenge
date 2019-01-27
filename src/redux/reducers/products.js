import { Map } from 'immutable';
import { FETCH_PRODUCTS_CATALOG, CHANGE_PRODUCTS_CATALOG_PAGE, CHANGE_PRODUCTS_SORT_OPTION } from '../types';
import { handleSuccess } from '../packUtils';
import Product from '../../entities/product';
import { initialPage, PRODUCTS_SORT } from '../../config';

const productsInitialState = new Map();
export const products = ( state = productsInitialState, action ) => {
	switch (action.type) {
	case FETCH_PRODUCTS_CATALOG:
		return handleSuccess(
			state,
			action,
			() => new Map( action.payload.map( product => [ product._id, Product.fromJSON( product ) ] ) )
		);
	default:
		return state;
	}
}

const productsPaginationInitialState = initialPage;
export const productsPagination = ( state = productsPaginationInitialState, action ) => {
	switch ( action.type ) {
	case CHANGE_PRODUCTS_CATALOG_PAGE:
		return action.payload.page;
	case CHANGE_PRODUCTS_SORT_OPTION: // expected behaviour? return to first page if sort options change
		return productsPaginationInitialState;
	default:
		return state;
	}
}

const productsSortInitialState = PRODUCTS_SORT[ PRODUCTS_SORT.LOWEST_PRICE.id ];
export const productsSort = ( state = productsSortInitialState, action ) => {
	switch ( action.type ) {
	case CHANGE_PRODUCTS_SORT_OPTION:
		return PRODUCTS_SORT[ action.payload.sortOptionID ];
	default:
		return state;
	}
}

