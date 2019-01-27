import React from 'react';
import { shallow } from 'enzyme';
import ShopItem from '../../../components/ShopItem/ShopItem';
import { PurchaseOverlay, CategoryName, ProductName, CoinsRemaining } from '../../../components/ShopItem/styledComponents';
import ShopBlueIcon from '../../../components/ShopBlueIcon/ShopBlueIcon';

describe( 'ShopItem', () => {
	const image = 'image.png';
	const name = 'iPhone';
	const category = 'phones';
	const cost = 200;
	const remainingPointsToBuyProduct = 20;
	const onRedeem = jest.fn();
	const component = shallow(
		<ShopItem
			image={image}
			name={name}
			category={category}
			cost={cost}
			remainingPointsToBuyProduct={remainingPointsToBuyProduct}
			onRedeem={onRedeem}
		/>
	);
	
	it( 'contains the product info', () => {
		expect( component.find( CategoryName ).text() ).toContain( category );
		expect( component.find( ProductName ).text() ).toContain( name );
	} );

	describe( 'when the user can\'t purchase the product', () => {
		beforeAll( () => {
			component.setProps( { remainingPointsToBuyProduct: 20 } );
			component.update();
		} );

		it( 'does not render the PurchaseOverlay', () => {
			expect( component.find( PurchaseOverlay ).exists() ).toBeFalsy();
		} );

		it( 'renders the info with the remaining points to redeem the product', () => {
			expect( component.find( CoinsRemaining ).text() ).toContain( `You need ${remainingPointsToBuyProduct}` );
			expect( component.find( ShopBlueIcon ).exists() ).toBeFalsy();
		} );
	} );

	describe( 'when the user can purchase the product', () => {
		beforeAll( () => {
			component.setProps( { remainingPointsToBuyProduct: -50 } );
			component.update();
		} );

		it( 'does not render the PurchaseOverlay', () => {
			expect( component.find( PurchaseOverlay ).exists() ).toBeTruthy();
		} );

		it( 'renders the shop blue icon', () => {
			expect( component.find( ShopBlueIcon ).exists() ).toBeTruthy();
			expect( component.find( CoinsRemaining ).exists() ).toBeFalsy();
		} );
	} );
} );