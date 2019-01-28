import { Map } from 'immutable';
import { products, productsPagination, productsSort } from '../../../redux/reducers/products';
import { makeSuccessPackAction } from '../../utils/makePackAction';
import { FETCH_PRODUCTS_CATALOG, CHANGE_PRODUCTS_CATALOG_PAGE, CHANGE_PRODUCTS_SORT_OPTION } from '../../../redux/types';
import Product from '../../../entities/product';
import { initialPage, PRODUCTS_SORT } from '../../../config';

describe( 'products', () => {

	describe( 'unhandled action', () => {
		const state = products( undefined, { type: 'UNHANDLED' });
		it( 'returns an empty map as initial state', () => {
			expect( Map.isMap( state ) ).toBeTruthy();
		} );
	} );

	describe( 'FETCH_PRODUCTS_CATALOG', () => {
		const productAttributes = {
			_id: 1,
			name: 'iPhone',
			cost: 200,
			category: 'Phones',
			img: { hdUrl: 'image.com', url: 'image.png' }
		};

		const action = makeSuccessPackAction( FETCH_PRODUCTS_CATALOG, [ productAttributes ] )
		const state = products( undefined, action );
		it( 'stores the response mapped as a product', () => {
			expect( state.get( 1 ) ).toBeInstanceOf( Product );
		} );
	} );
} );

describe( 'productsPagination', () => {
	describe( 'unhandledAction', () => {
		const state = productsPagination( undefined, { type: 'UNHANDLED' } );
		it( 'returns the initial state', () => {
			expect( state ).toBe( initialPage );
		} );
	} );

	describe( 'CHANGE_PRODUCTS_CATALOG_PAGE', () => {
		const action = { type: CHANGE_PRODUCTS_CATALOG_PAGE, payload: { page: 2 } }
		const state = productsPagination( undefined, action );
		it( 'stores the new given page', () => {
			expect( state ).toBe( 2 );
		} );
	} );

	describe( 'CHANGE_PRODUCTS_SORT_OPTION', () => {
		const action = { type: CHANGE_PRODUCTS_SORT_OPTION }
		const state = productsPagination( undefined, action );
		it( 'resets the page to the first one', () => {
			expect( state ).toBe( initialPage );
		} );
	} );
} );

describe( 'productsSort', () => {
	describe( 'unhandledAction', () => {
		const state = productsSort( undefined, { type: 'UNHANDLED' } );
		it( 'returns the initialState', () => {
			expect( state ).toEqual( PRODUCTS_SORT[ PRODUCTS_SORT.LOWEST_PRICE.id ] )
		} );
	} );

	describe( 'CHANGE_PRODUCTS_SORT_OPTION', () => {
		const action = {
			type: CHANGE_PRODUCTS_SORT_OPTION,
			payload: {
				sortOptionID: PRODUCTS_SORT.MOST_RECENT.id
			},
		}
		const state = productsSort( undefined, action );
		it( 'stores the given sort condition', () => {
			expect( state ).toEqual( PRODUCTS_SORT[ PRODUCTS_SORT.MOST_RECENT.id ] )
		} );
	} );
} );

