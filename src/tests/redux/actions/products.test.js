import store from '../../utils/mockStore';
import { fetchProductsCatalog, changeCatalogPage, changeSortOption } from '../../../redux/actions/products';
import apiMock from '../../utils/apiMock';
import { FETCH_PRODUCTS_CATALOG, CHANGE_PRODUCTS_CATALOG_PAGE, CHANGE_PRODUCTS_SORT_OPTION } from '../../../redux/types';
import { API_PRODUCTS_URL } from '../../../environment';
import { PRODUCTS_SORT_OPTIONS, PRODUCTS_SORT } from '../../../config';

describe( 'products', () => {

	afterEach( () => {
		apiMock.get.mockClear();
		apiMock.post.mockClear();
		store.clearActions();
	} );

	describe( 'fetchProductsCatalog', () => {
		beforeAll( () => {
			store.dispatch( fetchProductsCatalog() );
		} );

		it( 'dispatches an FETCH_PRODUCTS_CATALOG action and requests the products', () => {
			const action = store.getActions()[ 0 ];
			expect( action.type ).toBe( FETCH_PRODUCTS_CATALOG )
			expect( apiMock.get ).toHaveBeenCalledWith( API_PRODUCTS_URL );
		} );
	} );

	describe( 'changeCatalogPage', () => {
		beforeAll( () => {
			store.dispatch( changeCatalogPage( 2 ) );
		} );

		it( 'dispatches an CHANGE_PRODUCTS_CATALOG_PAGE action and contains the page', () => {
			const action = store.getActions()[ 0 ];
			expect( action.type ).toBe( CHANGE_PRODUCTS_CATALOG_PAGE )
			expect( action.payload ).toEqual( { page: 2 } );
		} );
	} );

	describe( 'changeSortOption', () => {
		beforeAll( () => {
			store.dispatch( changeSortOption( PRODUCTS_SORT.LOWEST_PRICE.id ) );
		} );

		it( 'dispatches an CHANGE_PRODUCTS_SORT_OPTION action contains the sortOptionID', () => {
			const action = store.getActions()[ 0 ];
			expect( action.type ).toBe( CHANGE_PRODUCTS_SORT_OPTION )
			expect( action.payload ).toEqual( { sortOptionID: PRODUCTS_SORT.LOWEST_PRICE.id } );
		} );
	} );
} );