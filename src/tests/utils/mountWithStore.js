import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import store from './mockStore';

const mountWithStore = component => mount(
	<Provider store={store}>
		{component}
	</Provider>
);

export default mountWithStore;
