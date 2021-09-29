import React from 'react';
import { Box } from '@chakra-ui/layout';
import Picture from 'components/Picture';
import { GalleryGridProps } from './types';

const GalleryGrid = ({ pictures }: GalleryGridProps): JSX.Element => {
	return (
		<Box display={'flex'} flexWrap={'wrap'}>
			{pictures.map((props, index) => (
				<Box key={index}>
					<Picture {...props} />
				</Box>
			))}
		</Box>
	);
};

export default GalleryGrid;
