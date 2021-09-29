import React from 'react';
import { Text } from '@chakra-ui/layout';

const GalleryEmpty = (): JSX.Element => {
	return (
		<>
			<Text>
				It seems that there is nothing here, try another combination of
				filters!
			</Text>
		</>
	);
};

export default GalleryEmpty;
