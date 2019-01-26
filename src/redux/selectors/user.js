import { createSelector } from 'reselect';

const getCurrentUser = state => state.currentUser || {};

export const selectUserName = createSelector(
	[ getCurrentUser ],
	currentUser => currentUser.name
)

export const selectUserPoints = createSelector(
	[ getCurrentUser ],
	currentUser => currentUser.points
)