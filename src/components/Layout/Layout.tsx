import React from 'react';
import { Box, Container, VStack } from '@chakra-ui/layout';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { LayoutProps } from './types';
import Footer from 'components/Footer';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Container maxW="container.xl">
				<Box pos={'absolute'} right={0} top={0} p={'1rem'}>
					<ThemeSwitcher />
				</Box>
				<VStack spacing={'1rem'}>{children}</VStack>
			</Container>
			<Footer />
		</>
	);
};

export default Layout;
