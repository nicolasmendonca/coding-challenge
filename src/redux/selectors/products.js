import { createSelector } from 'reselect';
import { amountOfPagesToShow, initialPage } from '../../config';

export const getCurrentPage = state => state.productsPagination
const getProducts = state => state.products;

export const selectProductsCatalog = createSelector(
	[ getProducts ],
	products => products.valueSeq().toArray()
);

export const selectProductsCount = createSelector(
	[ getProducts ],
	products => products.size
);

export const selectPaginatedProductsCatalog = createSelector(
	[ selectProductsCatalog, selectProductsCount, getCurrentPage ],
	( products, count, page ) => {
		let amountOfItemsToShow = Math.floor( count / amountOfPagesToShow );
		if ( page === amountOfPagesToShow ) { amountOfItemsToShow += count % amountOfPagesToShow; }

		return products.slice( amountOfItemsToShow * ( page - 1 ), amountOfItemsToShow * page )
	}
)

export const selectVisibleProductsCount = createSelector(
	[ selectPaginatedProductsCatalog ],
	paginatedProducts => paginatedProducts.length
)

export const selectPrevPageIsAvailable = createSelector(
	[ getCurrentPage ],
	currentPage => currentPage > initialPage
);

export const selectNextPageIsAvailable = createSelector(
	[ getCurrentPage ],
	currentPage => currentPage < amountOfPagesToShow
);

