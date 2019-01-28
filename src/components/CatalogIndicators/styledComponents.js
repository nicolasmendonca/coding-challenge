import styled from 'styled-components';

export const Container = styled.div`
	padding: 5px 0;
	border-bottom: 1px solid #d9d9d9;
	padding-top: 32px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;
	padding-bottom: 24px;

	@media only screen and (max-width: 1020px){
		flex-direction: column;
	}
`;