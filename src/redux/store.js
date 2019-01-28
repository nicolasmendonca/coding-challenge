import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { middleware as reduxPackMiddleware } from 'redux-pack';


import reducers from './reducers';
import { authToken } from '../environment';
import Api from '../lib/Api';

const api = new Api( authToken );

const middlewares = [
	thunk.withExtraArgument( api ),
	reduxPackMiddleware,
];

if ( process.env.NODE_ENV === 'development' ) {
	middlewares.push( logger );
}

export const store = createStore(
	reducers,
	applyMiddleware( ...middlewares )
);
