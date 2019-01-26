import React, { PureComponent } from 'react';
import styled from 'styled-components';
import coin from '../../assets/icons/coin.svg';
import { theme } from '../../styles/helpers';

const Container = styled.div`
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

const ActualCoins = styled.span`
	position: relative;
`;

const Removed = styled.span`
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

class PointsRemoved extends PureComponent {
	constructor( props ) {
		super( props );
		this.state = {
			actualCoins: this.props.initial
		}
	}

	componentDidMount() {
		const { removed } = this.props;
		setTimeout( () => {
			this.setState( prevState => ( { actualCoins: prevState.actualCoins - removed } ) )
		}, 1000 )
	}

	render() {
		const { removed } = this.props;
		const { actualCoins } = this.state;
		return (
			<Container>
				<ActualCoins>
					{actualCoins}
					<Removed>
						-{removed}
					</Removed>
				</ActualCoins>
				<img src={coin} alt="Coins"/>
			</Container>
		)
	}
}

PointsRemoved.defaultProps = {
	initial: 2000,
	removed: 50
}

export default PointsRemoved;
