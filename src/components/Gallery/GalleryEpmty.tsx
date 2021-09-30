import React from 'react';
import { Text } from '@chakra-ui/layout';

const GalleryEmpty = (): JSX.Element => {
	return (
		<Text
			as={'h3'}
			fontWeight={'bold'}
			color={'GrayText'}
			fontSize={'1.25rem'}
		>
			There are no results for that combination of filters, try another
			one!
		</Text>
	);
};

export default GalleryEmpty;
