import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';
import { connectComponent } from '../../redux/connectComponent';
import { selectUserName, selectUserPoints } from '../../redux/selectors/user';
import { asyncActionStatePropType } from '../../redux/packUtils';

const NavbarContainer = ( { name, coins, addCoins, isAddingCoins } ) => (
	<Navbar
		name={name}
		coins={coins}
		onCoinsAdd={addCoins}
		isAddingCoins={isAddingCoins}
	/>
);

NavbarContainer.defaultProps = {
	name: PropTypes.string,
	coins: PropTypes.number,
	addCoins: PropTypes.func.isRequired,
	addCoinsRequest: asyncActionStatePropType.isRequired
};

NavbarContainer.defaultProps = {
	name: '',
	coins: 0,
}

export default connectComponent( state => ( {
	isAddingCoins: state.addCoinsRequest.sending,
	name: selectUserName(state),
	coins: selectUserPoints(state),
} ) )( NavbarContainer );