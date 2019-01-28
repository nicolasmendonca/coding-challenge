import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import store from './mockStore';
import mainTheme from '../../styles/mainTheme';

const mountWithStore = component => mount(
	<Provider store={store}>
		<ThemeProvider theme={mainTheme}>
			{component}
		</ThemeProvider>
	</Provider>
);

export default mountWithStore;
