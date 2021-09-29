import React, { useContext } from 'react';
import { Box } from '@chakra-ui/layout';
import RoversContex from 'contexts/Rovers/context';
import GalleryGrid from './GalleryGrid';

const Gallery = (): JSX.Element => {
	const { roversData } = useContext(RoversContex);
	return (
		<Box
			minHeight={'50vh'}
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
		>
			<GalleryGrid pictures={roversData.pictures} />
		</Box>
	);
};

export default Gallery;
