import React from 'react';
import Header from '../../../components/Header/Header';
import { H1 } from '../../../components/Header/styledComponents';
import mountWithStore from '../../utils/mountWithStore';

describe( 'Header', () => {
	const name = 'John Doe';
	const image = 'image.png';
	const component = mountWithStore( <Header name={name} image={image} /> );

	it( 'renders the name inside a H1 tag', () => {
		expect( component.find( H1 ).text() ).toContain( name );
	} );

	it( 'renders the name inside a H1 tag', () => {
		expect( component.find( H1 ).text() ).toContain( name );
	} );
} );