import { Map } from 'immutable';
import { FETCH_PRODUCTS_CATALOG } from '../types';
import { handleSuccess } from '../packUtils';
import Product from '../../entities/product';

const initialState = new Map();
export const products = ( state = initialState, action ) => {
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