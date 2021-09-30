import React, { useEffect, useState } from 'react';
import { Image as ChakraImage } from '@chakra-ui/image';
import { Skeleton } from '@chakra-ui/skeleton';
import { PictureProps } from './types';

const Picture = ({
	src,
	alt,
	width,
	...props
}: PictureProps): JSX.Element => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (src) {
			setIsLoaded(false);
			const image = new Image();
			image.onload = () => {
				setIsLoaded(true);
			};
			image.src = src;
		}
	}, [src]);

	return (
		<Skeleton
			isLoaded={isLoaded}
			borderRadius={'1rem'}
			width={width}
			height={'100%'}
			overflow={'hidden'}
		>
			<ChakraImage
				src={src}
				alt={alt}
				width={width}
				{...props}
			/>
		</Skeleton>
	);
};

export default Picture;
