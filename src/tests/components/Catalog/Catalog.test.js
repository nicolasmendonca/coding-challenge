import React from 'react';
import { shallow } from 'enzyme';
import Catalog from '../../../components/Catalog/Catalog';
import Product from '../../../entities/product';
import Navbar from '../../../components/Navbar/Navbar';
import Header from '../../../components/Header/Header';
import CatalogIndicators from '../../../components/CatalogIndicators/CatalogIndicators';
import { ShopItemList } from '../../../components/Catalog/styledComponents';
import ProductShopItemContainer from '../../../containers/ProductShopItemContainer/ProductShopItemContainer';
import ItemsDisplayedContainer from '../../../containers/ItemsDisplayedContainer/ItemsDisplayedContainer';
import PaginationNavigatorContainer from '../../../containers/PaginationNavigatorContainer/PaginationNavigatorContainer';

describe( 'Catalog', () => {

	const userName = 'John Doe';
	const userPoints = 20;
	const products = [ new Product( 1, 'iPhone', 10, 'Phones', 'imageHD.png', 'imageSD.jpg' ) ];
	const onPrevPageClicked = jest.fn();
	const onNextPageClicked = jest.fn();
	const prevPageIsAvailable = false;
	const nextPageIsAvailable = true;
	const headerImage = 'image.png';

	const component = shallow(
		<Catalog
			userName={userName}
			userPoints={userPoints}
			products={products}
			onPrevPageClicked={onPrevPageClicked}
			onNextPageClicked={onNextPageClicked}
			prevPageIsAvailable={prevPageIsAvailable}
			nextPageIsAvailable={nextPageIsAvailable}
			headerImage={headerImage}
		/>
	);

	it( 'renders a Navbar component', () => {
		expect( component.find( Navbar ).exists() ).toBeTruthy();
		expect( component.find( Navbar ).prop( 'name' ) ).toBe( userName );
		expect( component.find( Navbar ).prop( 'coins' ) ).toBe( userPoints );
	} );

	it( 'renders a Header component', () => {
		expect( component.find( Header ).exists() ).toBeTruthy();
		expect( component.find( Header ).prop( 'name' ) ).toBe( 'Electronics' );
		expect( component.find( Header ).prop( 'image' ) ).toBe( headerImage );
	} );

	it( 'renders a the CatalogIndicators component', () => {
		expect( component.find( CatalogIndicators ).exists() ).toBeTruthy();
	} );

	it( 'renders a the ShopItemList component', () => {
		expect( component.find( ShopItemList ).exists() ).toBeTruthy();
	} );

	it( 'renders the products with the required props', () => {
		expect( component.find( ProductShopItemContainer ).exists() ).toBeTruthy();
		expect( component.find( ProductShopItemContainer ).prop( 'product' ) ).toBe( products[ 0 ] );
	} );

	it( 'renders the ItemsDisplayedContainer component', () => {
		expect( component.find( ItemsDisplayedContainer ).exists() ).toBeTruthy();
	} );

	it( 'renders the PaginationNavigatorContainer component', () => {
		expect( component.find( PaginationNavigatorContainer ).exists() ).toBeTruthy();
	} );


} );