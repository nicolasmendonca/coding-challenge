import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/Header/Header';
import { H1 } from '../../../components/Header/styledComponents';

describe( 'Header', () => {
	const name = 'John Doe';
	const image = 'image.png';
	const component = shallow( <Header name={name} image={image} /> );

	it( 'renders the name inside a H1 tag', () => {
		expect( component.find( H1 ).text() ).toContain( name );
	} );

	it( 'renders the name inside a H1 tag', () => {
		expect( component.find( H1 ).text() ).toContain( name );
	} );
} );