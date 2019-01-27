import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connectComponent } from '../../redux/connectComponent';
import {
	selectPaginatedProductsCatalog,
	selectProductsCount,
	getCurrentPage,
} from '../../redux/selectors/products';
import Catalog from '../../components/Catalog/Catalog';
import { selectHeaderImage } from '../../redux/selectors/theme';
import Product from '../../entities/product';

export class CatalogContainer extends PureComponent {
	componentDidMount() {
		this.props.fetchUserInfo();
		this.props.fetchProductsCatalog();
	}


	render() {
		const {
			products, productsCount, headerImage
		} = this.props;
		return (
		<Catalog
			headerImage={headerImage}
			products={products}
			productsCount={productsCount}
		/>
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
}

const mapStateToProps = state => ({
	headerImage: selectHeaderImage( state ),
	products: selectPaginatedProductsCatalog(state),
	productsCount: selectProductsCount(state),
	currentPage: getCurrentPage( state ),
});

export default connectComponent(mapStateToProps)(CatalogContainer);
