import styled from 'styled-components';
import { theme } from '../../styles/helpers';

const Container = styled.div`
	min-height: 50vh;
	background-image: url(${props => props.image});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	display: flex;
	align-items: flex-end;
`;

const H1 = styled.h1`
	font-family: ${theme('primaryFont')};
	font-size: 64px;
	font-weight: 900;
	color: ${theme('containerBackgroundColor')};
	padding-left: 24px;
`;

export { Container, H1 };
