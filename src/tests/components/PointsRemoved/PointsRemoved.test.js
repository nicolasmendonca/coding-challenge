import React from 'react';
import { mount } from 'enzyme';
import PointsRemoved from '../../../components/PointsRemoved/PointsRemoved';
import { ActualCoins } from '../../../components/PointsRemoved/styledComponents';

describe( 'PointsRemoved', () => {
	jest.useFakeTimers();
	const initial = 5000;
	const removed = 1000;
	const component = mount( <PointsRemoved initial={initial} removed={removed} /> );
	it( 'renders the initial coins', () => {
		expect( component.find( ActualCoins ).text() ).toContain( initial )
	} );
	it( 'renders the removed coins', () => {
		expect( component.find( ActualCoins ).text() ).toContain( removed )
	} );

	describe( 'after a second', () => {
		beforeAll( () => {
			jest.runAllTimers();
		} );

		it( 'renders the remaining coins', () => {
			expect( component.find( ActualCoins ).text() ).toContain( initial - removed );
		} );
	} );
} );