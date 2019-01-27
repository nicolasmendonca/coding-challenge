import React from 'react';
import { ModalContainer } from 'react-router-modal';
import MessagesContainer from '../../../containers/MessagesContainer/MessagesContainer';
import mountWithStore from '../../utils/mountWithStore';

describe( 'MessagesContainer', () => {
	const component = mountWithStore(
		<MessagesContainer/>
	);

	it( 'renders without errors', () => {
		expect( component ).toBeTruthy();
	} );

	it( 'renders a ModalContainer', () => {
		expect( component.find( ModalContainer ).exists() ).toBeTruthy();
	} );

	it( 'renders a ModalContainer', () => {
		expect( component.find( ModalContainer ).exists() ).toBeTruthy();
	} );
} );