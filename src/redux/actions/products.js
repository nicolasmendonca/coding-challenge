import { API_PRODUCTS_URL } from '../../environment';
import { FETCH_PRODUCTS_CATALOG, CHANGE_PRODUCTS_CATALOG_PAGE, CHANGE_PRODUCTS_SORT_OPTION } from '../types';

export const fetchProductsCatalog = () => ( dispatch, _, api ) => dispatch( {
	type: FETCH_PRODUCTS_CATALOG,
	promise: api.get( API_PRODUCTS_URL ),
} );

export const changeCatalogPage = page => ( {
	type: CHANGE_PRODUCTS_CATALOG_PAGE,
	payload: { page },
} )

export const changeSortOption = sortOptionID => ( {
	type: CHANGE_PRODUCTS_SORT_OPTION,
	payload: { sortOptionID }
} );
