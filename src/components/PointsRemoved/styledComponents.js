import styled from 'styled-components';
import { theme } from '../../styles/helpers';


export const Container = styled.div`
width: 150px;
background: ${theme('secondaryColor')};
display: flex;
justify-content: space-evenly;
align-items: center;
border-radius: 100px;
font-size: 24px;
position: relative;
padding: 16px 36px;
`;

export const ActualCoins = styled.span`
position: relative;
`;

export const Removed = styled.span`
@keyframes slideUp {
	from {
		transform: none;
		opacity: 1;
	}

	to {
		transform: translate( 0, -50px );
		opacity: 0;
	}
}
color: red;
position: absolute;
right: 0;
opacity: 0;
animation-duration: 1s;
animation-timing-function: ease-in-out;
animation-delay: 1s;
animation-iteration-count: 1;
animation-name: slideUp;
`;