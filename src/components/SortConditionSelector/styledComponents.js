import styled from 'styled-components';


export const SortContainer = styled.div`
	padding: 10px 20px;
	border-left: 1px solid #d9d9d9;
`;

export const Button = styled.button`
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

export const SortBy = styled.span`
	font-family: 'Source Sans Pro', sans-serif;
	font-size:24px;
	color:#a3a3a3;
	letter-spacing:-0.15px;
	line-height:48px;
	text-align:left;
`;