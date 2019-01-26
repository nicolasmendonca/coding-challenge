import { API_PRODUCTS_URL } from '../../environment';
import { FETCH_PRODUCTS_CATALOG, CHAGE_PRODUCTS_CATALOG_PAGE } from '../types';

export const fetchProductsCatalog = () => ( dispatch, _, api ) => dispatch( {
	type: FETCH_PRODUCTS_CATALOG,
	promise: api.get( API_PRODUCTS_URL ),
} );

export const changeCatalogPage = page => ( {
	type: CHAGE_PRODUCTS_CATALOG_PAGE,
	payload: { page },
} )
