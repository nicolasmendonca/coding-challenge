import { hidePurchaseSuccessMessage } from '../../../redux/actions/messages';
import { HIDE_SUCCESS_REDEEM_MESSAGE } from '../../../redux/types';

describe( 'messages', () => {
	describe( 'hidePurchaseSuccessMessage', () => {
		const action = hidePurchaseSuccessMessage();
		it( 'has an HIDE_SUCCESS_REDEEM_MESSAGE action type', () => {
			expect( action.type ).toBe( HIDE_SUCCESS_REDEEM_MESSAGE );
		} );
	} );
} );