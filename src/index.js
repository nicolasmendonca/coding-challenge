import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/store';
import CatalogContainer from './containers/CatalogContainer/CatalogContainer';
import './index.css';


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/" exact component={CatalogContainer} />
		</Router>
	</Provider>
	,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
