import { Map } from 'immutable';
import { FETCH_PRODUCTS_CATALOG, CHAGE_PRODUCTS_CATALOG_PAGE } from '../types';
import { handleSuccess } from '../packUtils';
import Product from '../../entities/product';
import { initialPage } from '../../config';

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
	case CHAGE_PRODUCTS_CATALOG_PAGE:
		return action.payload.page;
	default:
		return state;
	}
}
