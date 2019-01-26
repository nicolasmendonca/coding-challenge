import React from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../../assets/icons/arrow-left.svg';
import rightArrow from '../../assets/icons/arrow-right.svg';
import { Button } from './styledComponents';

const PaginationNavigator = ( {
	onPrevPageClicked, onNextPageClicked, prevPageIsAvailable, nextPageIsAvailable
} ) => (
	<div>
		{ prevPageIsAvailable && (
			<Button onClick={onPrevPageClicked}>
				<img src={leftArrow} alt=""/>
			</Button>
		) }
		{ nextPageIsAvailable && (
			<Button onClick={onNextPageClicked}>
				<img src={rightArrow} alt=""/>
			</Button>
		) }
	</div>
);

PaginationNavigator.propTypes = {
	onPrevPageClicked: PropTypes.func.isRequired,
	onNextPageClicked: PropTypes.func.isRequired,
	prevPageIsAvailable: PropTypes.bool.isRequired,
	nextPageIsAvailable: PropTypes.bool.isRequired
}

export default PaginationNavigator;
