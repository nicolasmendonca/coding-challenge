import { Map } from 'immutable';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import apiMock from './apiMock';
import { PRODUCTS_SORT, initialPage } from '../../config';
import mainTheme from '../../styles/mainTheme';
import CurrentUser from '../../entities/currentUser';
import Product from '../../entities/product';

const createStore = configureStore( [
	reduxPackMiddleware,
	thunk.withExtraArgument( apiMock )
] );

export const initialState = {
	products: new Map( [
		[ 1, new Product( 1, 'iPhone', 10, 'Phones', 'imageHD.png', 'imageSD.jpg' ) ],
		[ 2, new Product( 2, 'MacBook', 20, 'Laptops', 'imageHD.png', 'imageSD.jpg' ) ]
	] ),
	productsPagination: initialPage,
	productsSort: PRODUCTS_SORT[ PRODUCTS_SORT.LOWEST_PRICE.id ],
	coins: 2000,
	messages: new Map( [ [ 'REDEEM_SUCCESS', false ] ] ),
	purchase: new Map(),
	theme: mainTheme,
	currentUser: new CurrentUser( 1, [], 2000, 'John Doe', new Date() ),
	addCoinsRequest: { sending: false, error: null, success: false }
}

const store = createStore( initialState );

export const storeWithState = ( mergedState = {} ) => createStore( { ...initialState, mergedState } );

export default store;
