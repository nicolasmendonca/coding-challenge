import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';
import { connectComponent } from '../../redux/connectComponent';
import { selectUserName, selectUserPoints } from '../../redux/selectors/user';

const NavbarContainer = ( { name, coins, addCoins } ) => (
	<Navbar
		name={name}
		coins={coins}
		onCoinsAdd={addCoins}
	/>
);

NavbarContainer.defaultProps = {
	name: PropTypes.string,
	coins: PropTypes.number,
	addCoins: PropTypes.func.isRequired
};

NavbarContainer.defaultProps = {
	name: '',
	coins: 0,
}

export default connectComponent( state => ( {
	name: selectUserName(state),
	coins: selectUserPoints(state),
} ) )( NavbarContainer );