import styled from 'styled-components';
import { theme } from '../../styles/helpers';

export const Nav = styled.nav`
	background: ${theme('containerBackgroundColor')};
	height: 40px;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 220px;

	p {
		font-family: ${theme('primaryFont')};
		font-size:24px;
		color:${theme('secondaryTextColor')};
		letter-spacing:-0.15px;
		line-height:48px;
		text-align:left;
	}
`;

export const Coins = styled.span`
	font-family: ${theme('primaryFont')};
	background: ${theme('secondaryColor')};
	border-radius:100px;
	width:103px;
	height:48px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding-left: 12px;
	color: ${theme('primaryTextColor')};
	border: none;
	cursor: pointer;

	&:hover {
		transform: scale( 1.05 );
		transition: transform .25s ease-in-out;
	}
`;
