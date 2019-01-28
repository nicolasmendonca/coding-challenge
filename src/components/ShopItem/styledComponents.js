import styled from 'styled-components';
import { theme } from '../../styles/helpers';

export const Container = styled.div`
	background: ${theme('cardBackgroundColor')};
	box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
	width:276px;
	overflow: auto;
	width: 100%;
	margin-bottom: 12px;
	position: relative;
	transition: all cubic-bezier(0.15, 0.82, 1, 1) .4s;
	&:hover {
		transform: translate(-6px, -6px);

		.blue {
			display: none;
			width: 50px;
			height: 50px;
		}

		.PurchaseOverlay {
			opacity: 1;
		}
	}
`;

export const PriceContainer = styled.span`
	color: ${theme('containerBackgroundColor')};
	font-family: ${theme('primaryFont')};
	font-size: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const PurchaseOverlay = styled.div`
	opacity: 0;
	display: flex;
	position: absolute;
	cursor: pointer;
	width: 100%;
	height: 100%;
	background: ${theme('shopItemGradient')};
	z-index: 2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	transition: opacity .25s;
`;

export const RedeemButton = styled.span`
	margin-top: 18px;
	padding: 8px 24px;
	background: ${theme('containerBackgroundColor')};
	border-radius: 100px;
	color: ${theme('secondaryTextColor')};
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${theme('primaryFont')};
	font-size: 16px;
`;

export const ImageContainer = styled.div`
	border-bottom: 1px solid #d9d9d9;
	margin: 0 12px;
	height: 200px;
	border-bottom: 1px solid #d9d9d9;
	position: relative;
	padding: 12px 0;
`;

export const PurchaseButton = styled.div`
	border-radius: 50%;
	background: none;
	border: none;
	position: absolute;
	right: 0px;
	top: 12px;
`;

export const PurchaseIconButton = styled.div`
	width: 50px;
	height: 50px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(${ props => props.image });
	z-index: 3;
`

export const CategoryName = styled.p`
	font-family: ${theme('primaryFont')};
	font-size:16px;
	color:#a3a3a3;
	letter-spacing:-0.04px;
	text-align:left;
`;

export const ProductName = styled.p`
	font-family: ${theme('primaryFont')};
	font-size:18px;
	color: ${theme('secondaryTextColor')};
	letter-spacing:-0.04px;
	text-align:left;
`;

export const BodyContainer = styled.div`
	margin: 12px;
	overflow: auto;
`;

export const CoinsRemaining = styled.div`
	background: ${theme('secondaryTextColor')};
	width: 160px;
	border-radius:100px;
	font-family: ${theme('primaryFont')};
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	p {
		font-size: 15px;
		color: ${theme('containerBackgroundColor')};
	}
`
