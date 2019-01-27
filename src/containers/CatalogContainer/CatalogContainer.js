import React, { PureComponent } from 'react';
import { connectComponent } from '../../redux/connectComponent';
import { selectUserName, selectUserPoints } from '../../redux/selectors/user';
import {
	selectPaginatedProductsCatalog,
	selectProductsCount,
	getCurrentPage,
} from '../../redux/selectors/products';
import Catalog from '../../components/Catalog/Catalog';
import { selectHeaderImage } from '../../redux/selectors/theme';

class CatalogContainer extends PureComponent {
	componentDidMount() {
		this.props.fetchUserInfo();
		this.props.fetchProductsCatalog();
	}


	render() {
		const {
			userName, userPoints, products, productsCount, headerImage
		} = this.props;
		return (
		<Catalog
			headerImage={headerImage}
			userName={userName}
			userPoints={userPoints}
			products={products}
			productsCount={productsCount}
		/>
		);
	}
}

CatalogContainer.defaultProps = {
	userName: '',
	userPoints: 0
};

const mapStateToProps = state => ({
	headerImage: selectHeaderImage( state ),
	userName: selectUserName(state),
	userPoints: selectUserPoints(state),
	products: selectPaginatedProductsCatalog(state),
	productsCount: selectProductsCount(state),
	currentPage: getCurrentPage( state ),
});

export default connectComponent(mapStateToProps)(CatalogContainer);
