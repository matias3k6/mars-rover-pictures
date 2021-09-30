import React, { useContext } from 'react';
import { Box } from '@chakra-ui/layout';
import RoversContex from 'contexts/Rovers/context';
import GalleryGrid from './GalleryGrid';
import GalleryEmpty from './GalleryEpmty';

const Gallery = (): JSX.Element => {
	const { roversData } = useContext(RoversContex);
	const { pictures } = roversData;

	return (
		<Box
			minHeight={'50vh'}
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			width={'100%'}
		>
			{pictures.length > 0 ? (
				<GalleryGrid pictures={pictures} />
			) : (
				<GalleryEmpty />
			)}
		</Box>
	);
};

export default Gallery;
