import { API_PRODUCTS_URL } from '../../environment';
import { FETCH_PRODUCTS_CATALOG } from '../types';

export const fetchProductsCatalog = () => ( dispatch, _, api ) => dispatch( {
	type: FETCH_PRODUCTS_CATALOG,
	promise: api.get( API_PRODUCTS_URL ),
} );