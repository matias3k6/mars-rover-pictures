import React from 'react';
import Layout from 'components/Layout';
import { Text } from '@chakra-ui/layout';
import Gallery from 'components/Gallery';
import Pagination from 'components/Pagination';
import Filters from 'components/Filters';

export const HomeView = (): JSX.Element => (
	<Layout>
		<Text
			textAlign={'center'}
			as={'h1'}
			pt={'4rem'}
			fontWeight={'bold'}
			fontSize={'2xl'}
		>
			Mars Rovers Gallery
		</Text>
		<Filters />
		<Gallery />
		<Pagination />
	</Layout>
);
