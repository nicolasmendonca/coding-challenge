import React, { Fragment } from 'react';
import styled from 'styled-components';
import { ModalContainer } from 'react-router-modal';
import { Modal } from 'react-router-modal';
import { connectComponent } from '../../redux/connectComponent';
import { selectDisplayRedeemSuccessMessage, selectRedeemSuccess } from '../../redux/selectors/messages';
import PointsRemoved from '../../components/PointsRemoved/PointsRemoved';
import { Button } from '../../components/SortConditionSelector/styledComponents';

const ModalWrapper = styled.div`
	width: 500px;
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;

	Button {
		min-width: 40%;
	}
`;


const MessagesContainer = ( {
	displayRedeemSuccessMessage, redeemSuccessMessage, hidePurchaseSuccessMessage
} ) => (
	<Fragment>
		<ModalContainer />
		{ displayRedeemSuccessMessage && (
			<Modal onBackdropClick={hidePurchaseSuccessMessage}>
				<ModalWrapper>
					<h1>The product has been redeemed</h1>
					<PointsRemoved initial={redeemSuccessMessage.initialCoins} removed={redeemSuccessMessage.cost} />
					<Button active onClick={hidePurchaseSuccessMessage}><span>Ok</span></Button>
				</ModalWrapper>
          </Modal>
		) }
	</Fragment>
)

export default connectComponent( state => ( {
	displayRedeemSuccessMessage: selectDisplayRedeemSuccessMessage( state ),
	redeemSuccessMessage: selectRedeemSuccess( state ),
} ) )( MessagesContainer );
