import React, { PureComponent } from 'react';
import coin from '../../assets/icons/coin.svg';
import { Container, ActualCoins, Removed } from './styledComponents';

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
		}, 400 )
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
