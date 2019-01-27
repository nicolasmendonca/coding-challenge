import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import logo from '../../assets/aerolab-logo.svg';
import coin from '../../assets/icons/coin.svg';
import { Nav, UserInfo, Coins } from './styledComponents';

const Navbar = ({ name, coins, onCoinsAdd, isAddingCoins }) => (
	<Nav>
		<img src={logo} alt="Aerolab"/>
		<UserInfo>
			<p>
				{name}
			</p>
			<Coins as="button" disabled={isAddingCoins} onClick={() => onCoinsAdd( 1000 )} data-tip data-for="add-coins">
				{coins}
				<img src={coin} alt="Coins"/>
			</Coins>
		</UserInfo>
		<ReactTooltip id="add-coins" place="bottom" type="dark" effect="solid" >
			<span>Add 1000 more coins</span>
		</ReactTooltip>
	</Nav>
);

Navbar.propTypes = {
	name: PropTypes.string.isRequired,
	coin: PropTypes.number,
	onCoinsAdd: PropTypes.func.isRequired,
	isAddingCoins: PropTypes.bool
}

Navbar.defaultProps = {
	coin: 0,
	isAddingCoins: false
}


export default Navbar;
