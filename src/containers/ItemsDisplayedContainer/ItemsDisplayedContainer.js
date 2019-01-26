import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connectComponent } from '../../redux/connectComponent';
import { selectVisibleProductsCount, selectProductsCount } from '../../redux/selectors/products';
import ItemsDisplayed from '../../components/ItemsDisplayed/ItemsDisplayed';

class ItemsDisplayedContainer extends PureComponent {
	render() {
		const { visibleProducts, productsCount } = this.props;
		return (
			<ItemsDisplayed
				productsShown={visibleProducts}
				productsCount={productsCount}
			/>
		);
	}
}

ItemsDisplayedContainer.propTypes = {
	visibleProducts: PropTypes.number,
	productsCount: PropTypes.number,
}

ItemsDisplayedContainer.defaultProps = {
	visibleProducts: 0,
	productsCount: 0,
}

export default connectComponent( state => ( {
	visibleProducts: selectVisibleProductsCount( state ),
	productsCount: selectProductsCount( state ),
} ) )( ItemsDisplayedContainer );
