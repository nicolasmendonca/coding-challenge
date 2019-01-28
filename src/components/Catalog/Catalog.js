import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from '../Header/Header';
import CatalogIndicators from '../CatalogIndicators/CatalogIndicators';
import { Container, ShopItemList, PaginationIndicators } from './styledComponents';
import Product from '../../entities/product';
import ItemsDisplayedContainer from '../../containers/ItemsDisplayedContainer/ItemsDisplayedContainer';
import ProductShopItemContainer from '../../containers/ProductShopItemContainer/ProductShopItemContainer';
import PaginationNavigatorContainer from '../../containers/PaginationNavigatorContainer/PaginationNavigatorContainer';
import NavbarContainer from '../../containers/NavbarContainer/NavbarContainer';


const Catalog = ( { products, headerImage } ) => (
	<div className="CatalogContainer">
		<NavbarContainer />
		<Header name="Electronics" image={headerImage} />
		<Container className="Catalog">
			<CatalogIndicators />
			<ShopItemList>
				{products.map(product => (
					<Fade key={product.id} delay={300}>
						<ProductShopItemContainer product={product} />
					</Fade>
				) ) }
			</ShopItemList>
			<PaginationIndicators>
				<ItemsDisplayedContainer />
				<PaginationNavigatorContainer />
			</PaginationIndicators>
		</Container>
	</div>
);

Catalog.propTypes = {
	products: PropTypes.arrayOf( PropTypes.instanceOf( Product ) ),
	headerImage: PropTypes.string.isRequired,
}

Catalog.defaultProps = {
	products: []
}

export default Catalog;
