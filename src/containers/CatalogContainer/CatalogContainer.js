import React, { Component } from 'react';
import styled from 'styled-components';
import headerImage from '../../assets/header-x2.png';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import CatalogIndicators from '../../components/CatalogIndicators/CatalogIndicators';
import ShopItem from '../../components/ShopItem/ShopItem';
import { connectComponent } from '../../redux/connectComponent';

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

class CatalogContainer extends Component {
  render() {
    return (
      <div className="App">
        <Navbar name="John Kite" coins={6000} />
        <Header name="Electronics" image={headerImage} />
        <Container>
          <CatalogIndicators />
          <ShopItemList>
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
          </ShopItemList>
        </Container>
      </div>
    );
  }
}

export default connectComponent()( CatalogContainer );
