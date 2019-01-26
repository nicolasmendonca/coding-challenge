import React from 'react';
import ShopItem from '../../components/ShopItem/ShopItem';
import { connectComponent } from '../../redux/connectComponent';
import { selectPointsRemainingToBuyProduct } from '../../redux/selectors/products';

const ProductShopItemContainer = ( { product, pointsRemainingToBuyProduct } ) => (
	<ShopItem
		cost={product.cost}
		image={product.imgSD}
		name={product.name}
		category={product.category}
		remainingPointsToBuyProduct={pointsRemainingToBuyProduct}
	/>
);

export default connectComponent( ( state, props ) => ( {
	pointsRemainingToBuyProduct: selectPointsRemainingToBuyProduct( state, props )
} ) )( ProductShopItemContainer );