import styled from 'styled-components';
import { theme } from '../../styles/helpers';

export const Container = styled.div`
	background-position: center;
	background-repeat: no-repeat;
	position:relative;
	display: flex;
	align-items: flex-end;
`;

export const H1 = styled.h1`
	font-family: ${theme('primaryFont')};
	font-size: 3em;
	font-weight: 900;
	color: ${theme('containerBackgroundColor')};
	padding-left: 24px;
	z-index: 1;
	position: absolute;
	bottom: 0px;
`;

export const Img = styled.img`
	width: 100%;
`;
