import styled from 'styled-components';
import { theme } from '../../styles/helpers';


export const SortContainer = styled.div`
	padding: 10px 20px;
	border-left: 1px solid #d9d9d9;

	@media only screen and (max-width: 1020px){
		border-left: 0;
	}
	@media only screen and (max-width: 458px){
		padding: 0;
	}
	
`;

export const Button = styled.button`
	background: ${ props => props.active ? props.theme.primaryColor : props.theme.secondaryColor };
	border-radius:100px;
	padding: 8px 24px;
	border: none;
	margin: 0 12px;
	cursor: pointer;
	transition: all cubic-bezier(0.15, 0.82, 1, 1) .4s;

	&:hover{
		opacity: 0.7;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
	}

	span {
		font-family: ${theme('primaryFont')};
		font-size:1.5em ;
		color: ${theme('cardBackgroundColor')};
		letter-spacing:-0.15px;
		line-height:38px;
		text-align:left;
		@media only screen and (max-width: 650px){
			font-size: 1em ;
		}
		@media only screen and (max-width: 458px){
			font-size: 1.2em;
		}	
		@media only screen and (max-width: 321px){
			font-size: 1em;
		}
	}



	@media only screen and (max-width: 458px){
		padding: 2px 12px;
		margin: 0 2px;
	}

	@media only screen and (max-width: 321px){
		margin: 0 2px;
		padding: 2px 8px;
	}`;

export const SortBy = styled.span`
	font-family: ${theme('primaryFont')};
	font-size:24px;
	color: #a3a3a3;
	letter-spacing:-0.15px;
	line-height:48px;
	text-align:left;

	@media only screen and (max-width: 1020px){
		display:block;
		width:100%;
		text-align:center;
	}
`;