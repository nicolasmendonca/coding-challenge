import { createSelector } from 'reselect';

const getMessages = state => state.messages;

export const selectRedeemSuccess = createSelector(
	[ getMessages ],
	messages => messages.get( 'REDEEM_SUCCESS' )
)

export const selectDisplayRedeemSuccessMessage = createSelector(
	[ selectRedeemSuccess ],
	redeemSuccess => !!redeemSuccess
)

