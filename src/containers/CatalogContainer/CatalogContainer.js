import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connectComponent } from '../../redux/connectComponent';
import {
	selectPaginatedProductsCatalog,
	selectProductsCount,
	getCurrentPage,
	selectProductSortID,
} from '../../redux/selectors/products';
import Catalog from '../../components/Catalog/Catalog';
import { selectHeaderImage } from '../../redux/selectors/theme';
import Product from '../../entities/product';
import { StyledCatalog } from './styledComponent';
import { PRODUCTS_SORT_KEY_OPTIONS } from '../../config';

export class CatalogContainer extends PureComponent {
	componentDidMount() {
		this.props.fetchUserInfo();
		this.props.fetchProductsCatalog();
	}

	render() {
		const {
			products, productsCount, headerImage, selectedSortOption
		} = this.props;
		return (
			<StyledCatalog>
				<Catalog
					headerImage={headerImage}
					products={products}
					productsCount={productsCount}
					selectedSortOption={selectedSortOption}
				/>
			</StyledCatalog>
		);
	}
}

CatalogContainer.propTypes = {
	fetchUserInfo: PropTypes.func.isRequired,
	fetchProductsCatalog: PropTypes.func.isRequired,
	headerImage: PropTypes.string.isRequired,
	products: PropTypes.arrayOf( PropTypes.instanceOf( Product ) ).isRequired,
	productsCount: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	selectedSortOption: PropTypes.oneOf( PRODUCTS_SORT_KEY_OPTIONS ).isRequired
}

const mapStateToProps = state => ({
	headerImage: selectHeaderImage( state ),
	products: selectPaginatedProductsCatalog(state),
	productsCount: selectProductsCount(state),
	currentPage: getCurrentPage( state ),
	selectedSortOption: selectProductSortID( state ),
});

export default connectComponent(mapStateToProps)(CatalogContainer);
