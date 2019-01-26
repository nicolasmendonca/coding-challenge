import styled from 'styled-components';

const Container = styled.div`
	padding: 5px 0;
	border-bottom: 1px solid #d9d9d9;
	padding-top: 32px;

	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;
	padding-bottom: 24px;
`;

const SortBy = styled.span`
	font-family: 'Source Sans Pro', sans-serif;
	font-size:24px;
	color:#a3a3a3;
	letter-spacing:-0.15px;
	line-height:48px;
	text-align:left;
`;

const SortContainer = styled.div`
	padding: 10px 20px;
	border-left: 1px solid #d9d9d9;
`;

const Button = styled.button`
	background: ${ props => props.active ? '#0ad4fa' : '#ededed' };
	border-radius:100px;
	padding: 8px 24px;
	border: none;
	margin: 0 12px;
	cursor: pointer;

	span {
		font-family: 'Source Sans Pro', sans-serif;
		font-size:24px;
		color: #ffffff;
		letter-spacing:-0.15px;
		line-height:38px;
		text-align:left;
	}
`;

export {
	Container,
	SortBy,
	SortContainer,
	Button,
};
