import React from 'react';
import { Container, ResultCount, SortContainer, SortBy, Button } from './styledComponents';


const CatalogIndicators = () => (
	<Container>
		<ResultCount>
			16 of 32 products
		</ResultCount>
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

export default CatalogIndicators;
