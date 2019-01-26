import React from 'react';
import productImage from '../../assets/AcerAspire-x1.png';
import purchaseBlueIcon from '../../assets/icons/buy-blue.svg';
import { Container, ImageContainer, PurchaseButton, BodyContainer, CategoryName, ProductName } from './styledComponents';

const ShopItem = ( { image, name, category } ) => (
	<Container>
		<ImageContainer>
			<PurchaseButton>
				<img src={purchaseBlueIcon} alt="Purchase"/>
			</PurchaseButton>
			<img src={image} alt="Product"/>
		</ImageContainer>
		<BodyContainer>
			<CategoryName>
				{category}
			</CategoryName>
			<ProductName>
				{name}
			</ProductName>
		</BodyContainer>
	</Container>
);

ShopItem.defaultProps = {
	image: productImage,
}

export default ShopItem;
