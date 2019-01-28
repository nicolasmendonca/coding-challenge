import store from '../../utils/mockStore';
import apiMock from '../../utils/apiMock';
import { redeemProduct } from '../../../redux/actions/purchase';
import { REDEEM_PRODUCT } from '../../../redux/types';
import Product from '../../../entities/product';
import { API_REDEEM_URL } from '../../../environment';

describe( 'purchase', () => {

	const product = new Product(
		1,
		'iPhone',
		200,
		'phones',
		'imgHD.jpg',
		'imgSD.jpg'
	);

	afterEach( () => {
		store.clearActions();
		apiMock.get.mockClear();
		apiMock.post.mockClear();
	} );

	describe( 'redeemProduct', () => {
		beforeAll( () => {
			store.dispatch( redeemProduct( product ) );
		} );

		it( 'contains the right type, meta, and api call', () => {
			const action = store.getActions()[ 0 ];
			expect( action.type ).toBe( REDEEM_PRODUCT );
			expect( action.meta ).toEqual( { product, initialCoins: 2000 } );
			expect( apiMock.post ).toHaveBeenCalledWith( API_REDEEM_URL, { productId: product.id } );
		} );
	} );
} );
