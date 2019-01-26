import React from 'react';
import PropTypes from 'prop-types';
import headerImage from '../../assets/header-x2.png';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import ShopItem from '../ShopItem/ShopItem';
import PaginationNavigator from '../PaginationNavigator/PaginationNavigator';
import CatalogIndicators from '../CatalogIndicators/CatalogIndicators';
import { Container, ShopItemList, PaginationIndicators } from './styledComponents';
import Product from '../../entities/product';
import ItemsDisplayedContainer from '../../containers/ItemsDisplayedContainer/ItemsDisplayedContainer';


const Catalog = ( {
	userName, userPoints, products, productsCount,
	onPrevPageClicked, onNextPageClicked,
	prevPageIsAvailable, nextPageIsAvailable
} ) => (
	<div className="CatalogContainer">
		<Navbar name={userName} coins={userPoints} />
		<Header name="Electronics" image={headerImage} />
		<Container>
			<CatalogIndicators />
			<ShopItemList>
				{ products.map( product => <ShopItem key={product.id} image={product.imgSD} name={product.name} category={product.category} /> ) }
			</ShopItemList>
			<PaginationIndicators>
				<ItemsDisplayedContainer />
				<PaginationNavigator
					onPrevPageClicked={onPrevPageClicked}
					onNextPageClicked={onNextPageClicked}
					prevPageIsAvailable={prevPageIsAvailable}
					nextPageIsAvailable={nextPageIsAvailable}
				/>
			</PaginationIndicators>
		</Container>
	</div>
);

Catalog.propTypes = {
	userName: PropTypes.string.isRequired,
	userPoints: PropTypes.number.isRequired,
	products: PropTypes.arrayOf( PropTypes.instanceOf( Product ) ),
	productsCount: PropTypes.number.isRequired,
	prevPageIsAvailable: PropTypes.bool.isRequired,
	nextPageIsAvailable: PropTypes.bool.isRequired,
	onPrevPageClicked: PropTypes.func.isRequired,
	onNextPageClicked: PropTypes.func.isRequired,
}

Catalog.defaultProps = {
	products: []
}

export default Catalog;
