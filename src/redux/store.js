import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { middleware as reduxPackMiddleware } from 'redux-pack';


import reducers from './reducers';
import { authToken } from '../environment';
import Api from '../lib/Api';

const api = new Api( authToken );

export const store = createStore(
	reducers,
	applyMiddleware(
		thunk.withExtraArgument( api ),
		reduxPackMiddleware,
		logger
	)
);
