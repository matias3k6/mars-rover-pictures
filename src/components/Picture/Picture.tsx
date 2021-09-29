import React, { useEffect, useState } from 'react';
import { Image as ChakraImage } from '@chakra-ui/image';
import { Text, Box } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { RoverPicture } from 'global/rovers';

const Picture = ({ camera, img_src }: Partial<RoverPicture>): JSX.Element => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (img_src) {
			setIsLoaded(false);
			const image = new Image();
			image.onload = () => {
				setIsLoaded(true);
			};
			image.src = img_src;
		}
	}, [img_src]);
	return (
		<Skeleton
			isLoaded={isLoaded}
			borderRadius={'1rem'}
			margin={'1rem'}
			overflow={'hidden'}
		>
			<Box pos={'relative'} width={'280px'} height={'280px'}>
				<ChakraImage
					src={img_src}
					objectFit={'cover'}
					minHeight={'100%'}
					loading={'lazy'}
				/>
				<Box
					pos={'absolute'}
					bottom={0}
					left={0}
					right={0}
					textAlign={'center'}
					backgroundColor={'rgba(0,0,0,.5)'}
					padding={'1rem'}
				>
					<Text>{`${camera?.name} ${camera?.full_name}`}</Text>
				</Box>
			</Box>
		</Skeleton>
	);
};

export default Picture;
