import React, { PureComponent } from 'react';
import PaginationNavigator from '../../components/PaginationNavigator/PaginationNavigator';
import { connectComponent } from '../../redux/connectComponent';
import { selectPrevPageIsAvailable, selectNextPageIsAvailable } from '../../redux/selectors/products';

const PAGE_DIRECTIONS = Object.freeze({
	PREV: 'PREV',
	NEXT: 'NEXT'
});

class PaginationNavigatorContainer extends PureComponent {


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
		document.querySelector( '.Catalog' ).scrollIntoView();
	}

	render () {
		const { prevPageIsAvailable, nextPageIsAvailable } = this.props;
		return (
			<PaginationNavigator
				onPrevPageClicked={() => this._pageChangeHandler(PAGE_DIRECTIONS.PREV)}
				onNextPageClicked={() => this._pageChangeHandler(PAGE_DIRECTIONS.NEXT)}
				prevPageIsAvailable={prevPageIsAvailable}
				nextPageIsAvailable={nextPageIsAvailable}
			/>
		);
	}
}

export default connectComponent( state => ( {
	prevPageIsAvailable: selectPrevPageIsAvailable( state ),
	nextPageIsAvailable: selectNextPageIsAvailable( state ),
} ) )( PaginationNavigatorContainer );