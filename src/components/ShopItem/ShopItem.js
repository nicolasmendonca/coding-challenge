import React from 'react';
import productImage from '../../assets/AcerAspire-x1.png';
import purchaseBlueIcon from '../../assets/icons/buy-blue.svg';
import purchaseWhiteIcon from '../../assets/icons/buy-white.svg';
import coin from '../../assets/icons/coin.svg';
import { Container, ImageContainer, PurchaseButton, BodyContainer, CategoryName, ProductName, PurchaseOverlay, PriceContainer, RedeemButton, CoinsRemaining } from './styledComponents';

const ShopItem = ( { image, name, category, cost, remainingPointsToBuyProduct, onRedeem } ) => (
	<Container>
		{remainingPointsToBuyProduct < 0 && (
			<PurchaseOverlay onClick={onRedeem} className="PurchaseOverlay">
				<PurchaseButton>
					<img style={{ marginRight: '7px' }} src={purchaseWhiteIcon} alt="Purchase"/>
				</PurchaseButton>
				<PriceContainer>
					{cost}
					&nbsp;
					<img src={coin} alt=""/>
				</PriceContainer>
				<RedeemButton>
					Redeem now
				</RedeemButton>
			</PurchaseOverlay>
		)}
		<ImageContainer>
			<PurchaseButton>
				{ remainingPointsToBuyProduct < 0
					? <img src={purchaseBlueIcon} alt="Purchase"/>
					: <CoinsRemaining><p>You need {remainingPointsToBuyProduct}</p><img src={coin} alt="Coin" /></CoinsRemaining>
				}
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
	cost: '12.000'
}

export default ShopItem;
