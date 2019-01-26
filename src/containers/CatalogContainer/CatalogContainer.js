import React, { PureComponent } from 'react';
import styled from 'styled-components';
import headerImage from '../../assets/header-x2.png';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import CatalogIndicators from '../../components/CatalogIndicators/CatalogIndicators';
import ShopItem from '../../components/ShopItem/ShopItem';
import { connectComponent } from '../../redux/connectComponent';
import { selectUserName, selectUserPoints } from '../../redux/selectors/user';
import { selectProductsCatalog } from '../../redux/selectors/products';

const Container = styled.div`
  background-color: #f9f9f9;
  padding: 48px;
`;

const ShopItemList = styled.div`
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 1rem;
  justify-content: space-between;
`;

class CatalogContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchUserInfo();
    this.props.fetchProductsCatalog();
  }

  render() {
    const { userName, userPoints, products } = this.props;
    return (
      <div className="App">
        <Navbar name={userName} coins={userPoints} />
        <Header name="Electronics" image={headerImage} />
        <Container>
          <CatalogIndicators productsCount={products.length} />
          <ShopItemList>
            { products.map( product => <ShopItem key={product.id} image={product.imgSD} name={product.name} category={product.category} /> ) }
          </ShopItemList>
        </Container>
      </div>
    );
  }
}

CatalogContainer.defaultProps = {
  userName: '',
  points: null,
}

const mapStateToProps = state => ( {
  userName: selectUserName( state ),
  userPoints: selectUserPoints( state ),
  products: selectProductsCatalog( state )
} )

export default connectComponent( mapStateToProps )( CatalogContainer );
