import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import { GlobalStyles } from './components/Global/Global.styles';
import { theme } from './Theme/theme';
import { preferedColorScheme } from './components/Global/helper';

const App = () => {
	const [themex, setThemex] = useState('dark');

	useEffect(() => {
		setThemex(preferedColorScheme());
	}, []);

	const toggleTheme = () =>
		setThemex((old) => (old === 'dark' ? 'light' : 'dark'));

	return (
		<>
			<ThemeProvider theme={theme[themex]}>
				<GlobalStyles />
				<Header toggle={toggleTheme} theme={themex} />
			</ThemeProvider>
		</>
	);
};

export default App;
