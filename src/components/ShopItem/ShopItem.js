import React from 'react';
import productImage from '../../assets/AcerAspire-x1.png';
import purchaseBlueIcon from '../../assets/icons/buy-blue.svg';
import { Container, ImageContainer, PurchaseButton, BodyContainer, CategoryName, ProductName } from './styledComponents';

const ShopItem = () => (
	<Container>
		<ImageContainer>
			<PurchaseButton>
				<img src={purchaseBlueIcon} alt="Purchase"/>
			</PurchaseButton>
			<img src={productImage} alt="Product"/>
		</ImageContainer>
		<BodyContainer>
			<CategoryName>
				Phones
			</CategoryName>
			<ProductName>
				iPhone 8
			</ProductName>
		</BodyContainer>
	</Container>
);

export default ShopItem;
