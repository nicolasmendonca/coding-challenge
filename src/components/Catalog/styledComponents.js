import styled from 'styled-components';
import { theme } from '../../styles/helpers';

export const Container = styled.div`
	background-color: ${theme('containerBackgroundColor')};
	padding: 48px;
	transition: all cubic-bezier(0.15, 0.82, 1, 1) .4s;

	@media only screen and (max-width: 700px){
		padding: 20px;
	}
`;

export const ShopItemList = styled.div`
	padding-top: 24px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 300px);
	grid-gap: 1rem;
	justify-content: space-between;

	@media (max-width:768px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width:600px) {
		grid-template-columns: 1fr ;
	}

`;

export const PaginationIndicators = styled.div`
	border-top: 1px solid #d9d9d9;
	padding-top: 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
