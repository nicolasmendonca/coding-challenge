import { KEY, LIFECYCLE } from 'redux-pack';

// this utility method will make an action that redux pack understands
export function makePackAction( lifecycle, { type, payload, meta = {} } ) {
	return {
		type,
		payload,
		meta: {
			...meta,
			[ KEY.LIFECYCLE ]: lifecycle
		}
	};
}

export const makeStartPackAction =
	( type, payload = true, meta = {} ) => makePackAction(
		LIFECYCLE.START, { type, payload, meta }
	);

export const makeSuccessPackAction =
	( type, payload = undefined, meta = {} ) => makePackAction(
		LIFECYCLE.SUCCESS, { type, payload, meta }
	);

export const makeErrorPackAction =
	( type, error, meta = {} ) => makePackAction(
		LIFECYCLE.FAILURE, { type, payload: error, meta }
	);