import styled from 'styled-components';

const Container = styled.div`
	background:#ffffff;
	box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
	width:276px;
	overflow: auto;
	width: 300px;
	padding: 12px 0;
	margin: 1%;
`;

const ImageContainer = styled.div`
	border-bottom: 1px solid #d9d9d9;
	margin: 0 12px;
	height: 200px;
	border-bottom: 1px solid #d9d9d9;
	position: relative;
`;

const PurchaseButton = styled.button`
	border-radius: 50%;
	background: none;
	border: none;
	cursor: pointer;
	position: absolute;
	right: 0px;
	top: 0px;
`;

const CategoryName = styled.p`
	font-family: 'Source Sans Pro', sans-serif;
	font-size:16px;
	color:#a3a3a3;
	letter-spacing:-0.04px;
	text-align:left;
`;

const ProductName = styled.p`
	font-family: 'Source Sans Pro', sans-serif;
	font-size:18px;
	color:#616161;
	letter-spacing:-0.04px;
	text-align:left;
`;

const BodyContainer = styled.div`
	margin: 12px;
	overflow: auto;
`;

export {
	Container,
	ImageContainer,
	PurchaseButton,
	CategoryName,
	ProductName,
	BodyContainer,
}
