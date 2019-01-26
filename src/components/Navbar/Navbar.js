import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/aerolab-logo.svg';
import coin from '../../assets/icons/coin.svg';
import { Nav, UserInfo, Coins } from './styledComponents';

const Navbar = ({ name, coins }) => (
	<Nav>
		<img src={logo} alt="Aerolab"/>
		<UserInfo>
			<p>
				{name}
			</p>
			<Coins>
				{coins}
				<img src={coin} alt="Coins"/>
			</Coins>
		</UserInfo>
	</Nav>
);

Navbar.propTypes = {
	name: PropTypes.string.isRequired,
	coin: PropTypes.number
}

Navbar.defaultProps = {
	coin: 0
}


export default Navbar;
