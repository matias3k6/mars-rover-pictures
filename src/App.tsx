import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import AppRouter from 'router/Router';
import RoversProvider from 'contexts/Rovers/Provider';

export const App = (): JSX.Element => (
	<ChakraProvider theme={theme}>
		<RoversProvider>
			<AppRouter />
		</RoversProvider>
	</ChakraProvider>
);
