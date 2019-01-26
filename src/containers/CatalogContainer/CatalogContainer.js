import React, { PureComponent } from 'react';
import { connectComponent } from '../../redux/connectComponent';
import { selectUserName, selectUserPoints } from '../../redux/selectors/user';
import {
	selectPaginatedProductsCatalog,
	selectProductsCount,
	getCurrentPage,
	selectPrevPageIsAvailable,
	selectNextPageIsAvailable
} from '../../redux/selectors/products';
import Catalog from '../../components/Catalog/Catalog';

const PAGE_DIRECTIONS = Object.freeze({
	PREV: 'PREV',
	NEXT: 'NEXT'
});

class CatalogContainer extends PureComponent {
	componentDidMount() {
		this.props.fetchUserInfo();
		this.props.fetchProductsCatalog();
	}

	/**
	 * @param {PAGE_DIRECTIONS.PREV|PAGE_DIRECTIONS.NEXT} pageDirection
	 */
	_pageChangeHandler(pageDirection) {
		const { currentPage } = this.props;
		const pages = {
			[ PAGE_DIRECTIONS.PREV ]: -1,
			[ PAGE_DIRECTIONS.NEXT ]: +1,
		}
		this.props.changeCatalogPage( currentPage + pages[ pageDirection ] );
	}

	render() {
		const {
			userName, userPoints, products, productsCount,
			prevPageIsAvailable, nextPageIsAvailable,
		} = this.props;
		return (
		<Catalog
			userName={userName}
			userPoints={userPoints}
			products={products}
			productsCount={productsCount}
			onPrevPageClicked={() => this._pageChangeHandler(PAGE_DIRECTIONS.PREV)}
			onNextPageClicked={() => this._pageChangeHandler(PAGE_DIRECTIONS.NEXT)}
			prevPageIsAvailable={prevPageIsAvailable}
			nextPageIsAvailable={nextPageIsAvailable}
		/>
		);
	}
}

CatalogContainer.defaultProps = {
	userName: '',
	userPoints: 0
};

const mapStateToProps = state => ({
	userName: selectUserName(state),
	userPoints: selectUserPoints(state),
	products: selectPaginatedProductsCatalog(state),
	productsCount: selectProductsCount(state),
	currentPage: getCurrentPage( state ),
	prevPageIsAvailable: selectPrevPageIsAvailable( state ),
	nextPageIsAvailable: selectNextPageIsAvailable( state ),
});

export default connectComponent(mapStateToProps)(CatalogContainer);
