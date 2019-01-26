import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/store';
import CatalogContainer from './containers/CatalogContainer/CatalogContainer';
import 'react-router-modal/css/react-router-modal.css';
import './index.css';

import MessagesContainer from './containers/MessagesContainer/MessagesContainer';
import PointsRemoved from './components/PointsRemoved/PointsRemoved';

import theme from './styles/theme';


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<ThemeProvider theme={theme}>
				<Fragment>
					<Route path="/" exact component={CatalogContainer} />
					<Route path="/markup" exact component={PointsRemoved} />
					<MessagesContainer />
				</Fragment>
			</ThemeProvider>
		</Router>
	</Provider>
	,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
