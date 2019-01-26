import styled from 'styled-components';

export const Container = styled.div`
	background:#ffffff;
	box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
	width:276px;
	overflow: auto;
	width: 300px;
	margin-bottom: 12px;
	position: relative;
	transition: transform .25s;

	&:hover {
		transform: translate(-6px, -6px);

		.PurchaseOverlay {
			opacity: 1;
		}
	}
`;

export const PriceContainer = styled.span`
	color: white;
	font-family: 'Source Sans Pro', sans-serif;
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
	background: linear-gradient(-180deg,#0ad4fabd 0%,#25bbf1d4 100%);
	z-index: 2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	transition: opacity .25s;
`;

export const RedeemButton = styled.span`
	margin-top: 18px;
	padding: 8px 24px;
	background: white;
	border-radius: 100px;
	color: #616161;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Source Sans Pro', sans-serif;
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
	top: 0px;
`;

export const CategoryName = styled.p`
	font-family: 'Source Sans Pro', sans-serif;
	font-size:16px;
	color:#a3a3a3;
	letter-spacing:-0.04px;
	text-align:left;
`;

export const ProductName = styled.p`
	font-family: 'Source Sans Pro', sans-serif;
	font-size:18px;
	color:#616161;
	letter-spacing:-0.04px;
	text-align:left;
`;

export const BodyContainer = styled.div`
	margin: 12px;
	overflow: auto;
`;

export const CoinsRemaining = styled.div`
	background: #616161c9;
	width: 160px;
	border-radius:100px;
	font-family: 'Source Sans Pro', sans-serif;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	p {
		color: white;
	}
`
