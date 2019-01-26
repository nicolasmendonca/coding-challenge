import styled from 'styled-components';

export const Container = styled.div`
	background-color: #f9f9f9;
	padding: 48px;
`;

export const ShopItemList = styled.div`
	padding-top: 24px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 300px);
	grid-gap: 1rem;
	justify-content: space-between;
`;

export const PaginationIndicators = styled.div`
	border-top: 1px solid #d9d9d9;
	padding-top: 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
