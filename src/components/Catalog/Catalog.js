import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import CatalogIndicators from '../CatalogIndicators/CatalogIndicators';
import { Container, ShopItemList, PaginationIndicators } from './styledComponents';
import Product from '../../entities/product';
import ItemsDisplayedContainer from '../../containers/ItemsDisplayedContainer/ItemsDisplayedContainer';
import ProductShopItemContainer from '../../containers/ProductShopItemContainer/ProductShopItemContainer';
import PaginationNavigatorContainer from '../../containers/PaginationNavigatorContainer/PaginationNavigatorContainer';


const Catalog = ( {
	userName, userPoints, products,
	headerImage
} ) => (
	<div className="CatalogContainer">
		<Navbar name={userName} coins={userPoints} />
		<Header name="Electronics" image={headerImage} />
		<Container className="Catalog">
			<CatalogIndicators />
			<ShopItemList>
				{ products.map( product => <ProductShopItemContainer key={product.id} product={product} /> ) }
			</ShopItemList>
			<PaginationIndicators>
				<ItemsDisplayedContainer />
				<PaginationNavigatorContainer />
			</PaginationIndicators>
		</Container>
	</div>
);

Catalog.propTypes = {
	userName: PropTypes.string.isRequired,
	userPoints: PropTypes.number.isRequired,
	products: PropTypes.arrayOf( PropTypes.instanceOf( Product ) ),
	headerImage: PropTypes.string.isRequired,
}

Catalog.defaultProps = {
	products: []
}

export default Catalog;
