import styled from 'styled-components';

export const ThemeChanger = styled.img`
	z-index: 4;
	transform: rotate(45deg) translate(0, 60px);
	position: fixed;
	top: 15vh;
	width: 100px;
	cursor: pointer;
	transition: all cubic-bezier(0.15, 0.82, 1, 1) .4s;

	&:hover{
		transform: rotate(45deg) translate(20px, 20px) ;
	}
`;