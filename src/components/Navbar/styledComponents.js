import styled from 'styled-components';

const Nav = styled.nav`
background: white;
height: 40px;
padding: 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const UserInfo = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 220px;

p {
	font-family: ${ props => props.theme.primaryFont };
	font-size:24px;
	color:#616161;
	letter-spacing:-0.15px;
	line-height:48px;
	text-align:left;
}
`;

const Coins = styled.span`
font-family: ${ props => props.theme.primaryFont };
background: ${ props => props.theme.secondaryColor };
border-radius:100px;
width:103px;
height:48px;
display: flex;
align-items: center;
justify-content: space-evenly;
padding-left: 12px;
`;

export {
	Nav,
	UserInfo,
	Coins
}
