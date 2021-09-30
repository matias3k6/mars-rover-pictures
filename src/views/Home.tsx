import React from 'react';
import Layout from 'components/Layout';
import { Text } from '@chakra-ui/layout';
import Gallery from 'components/Gallery';
import Pagination from 'components/Pagination';
import Filters from 'components/Filters';
import { Divider } from '@chakra-ui/react';

export const HomeView = (): JSX.Element => (
	<Layout>
		<Text
			as={'h1'}
			textAlign={'center'}
			fontWeight={'bold'}
			fontSize={'2xl'}
			pt={'4rem'}
		>
			Mars Rovers Gallery
		</Text>
		<Filters />
		<Divider />
		<Gallery />
		<Pagination />
	</Layout>
);
