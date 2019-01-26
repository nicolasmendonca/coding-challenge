import React from 'react';
import productImage from '../../assets/AcerAspire-x1.png';
import coin from '../../assets/icons/coin.svg';
import { Container, ImageContainer, PurchaseButton, BodyContainer, CategoryName, ProductName, PurchaseOverlay, PriceContainer, RedeemButton, CoinsRemaining } from './styledComponents';
import ShopBlueIcon from '../ShopBlueIcon/ShopBlueIcon';
import ShopWhiteIcon from '../ShopWhiteIcon/ShopWhiteIcon';

const ShopItem = ( { image, name, category, cost, remainingPointsToBuyProduct, onRedeem } ) => (
	<Container>
		{remainingPointsToBuyProduct < 0 && (
			<PurchaseOverlay onClick={onRedeem} className="PurchaseOverlay">
				<PurchaseButton>
					<ShopWhiteIcon />
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
					? <ShopBlueIcon />
					: <CoinsRemaining><p>You need {remainingPointsToBuyProduct}</p><img src={coin} alt="Coin" /></CoinsRemaining>
				}
			</PurchaseButton>
			<img style={{width: '100%'}} src={image} alt="Product"/>
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
