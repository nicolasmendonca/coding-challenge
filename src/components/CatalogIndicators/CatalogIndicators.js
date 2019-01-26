import React from 'react';
import PropTypes from 'prop-types';
import { Container, SortContainer, SortBy, Button } from './styledComponents';
import ItemsDisplayedContainer from '../../containers/ItemsDisplayedContainer/ItemsDisplayedContainer';


const CatalogIndicators = () => (
	<Container>
		<ItemsDisplayedContainer />
		<SortContainer>
			<SortBy>Sort by:</SortBy>
			<Button active>
				<span>
					Most recent
				</span>
			</Button>
			<Button>
				<span>
					Lowest price
				</span>
			</Button>
			<Button>
				<span>
					Highest price
				</span>
			</Button>
		</SortContainer>
	</Container>
);

CatalogIndicators.propTypes = {
	productsCount: PropTypes.number,
	productsShown: PropTypes.number,
};

CatalogIndicators.defaultProps = {
	productsCount: 0,
	productsShown: 0,
}

export default CatalogIndicators;
