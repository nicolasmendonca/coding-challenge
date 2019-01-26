import { createSelector } from 'reselect';

const getProducts = state => state.products;

export const selectProductsCatalog = createSelector(
	[ getProducts ],
	products => products.valueSeq().toArray()
);

export const selectProductsCount = createSelector(
	[ getProducts ],
	products => products.size
);