import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RoversProvider } from 'contexts/Rovers';
import AppRouter from 'router/Router';
import theme from 'theme';

export const App = (): JSX.Element => (
	<ChakraProvider theme={theme}>
		<RoversProvider>
			<AppRouter />
		</RoversProvider>
	</ChakraProvider>
);
