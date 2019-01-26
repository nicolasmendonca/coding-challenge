import { handle } from 'redux-pack';

export const handleSuccess = (
	state, action, handler
) => handle(
	state, action, { success: handler }
)