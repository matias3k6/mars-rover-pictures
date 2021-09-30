import React, { useState } from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/layout';
import { GalleryGridProps } from './types';
import Picture from 'components/Picture';
import { RoverPicture } from 'global/types';
import Dialog from 'components/Dialog';

const GalleryGrid = ({ pictures }: GalleryGridProps): JSX.Element => {
	const height = `${window.innerHeight - 90}px`;
	const [dialog, setDialog] = useState({
		open: false,
		src: '',
		title: '',
		imageHeight: 'auto',
	});

	const handleClickPicture = ({ img_src, camera }: RoverPicture) => {
		const { name, full_name } = camera;
		setDialog({
			imageHeight: height,
			open: true,
			src: img_src,
			title: `${name} ${full_name}`,
		});
	};

	const closeDialog = () =>
		setDialog((prevState) => ({
			...prevState,
			open: false,
			imageHeight: height,
		}));

	const toggleZoom = () => {
		setDialog((prevState) => ({
			...prevState,
			imageHeight: prevState.imageHeight === 'auto' ? height : 'auto',
		}));
	};

	return (
		<>
			<SimpleGrid columns={{ md: 3, lg: 5 }} gap={'2rem'} width={'100%'}>
				{pictures.map((props, index) => (
					<Box key={index} height={'320px'}>
						<Picture
							onClick={() => handleClickPicture(props)}
							width={'100%'}
							cursor={'pointer'}
							objectFit={'cover'}
							minHeight={'100%'}
							loading={'lazy'}
							src={props.img_src}
							borderRadius={'1rem'}
						/>
					</Box>
				))}
			</SimpleGrid>
			<Dialog open={dialog.open} onClose={closeDialog}>
				<Box paddingTop={'1.75rem'}>
					<Text as={'h3'} fontSize={'1.25rem'} fontWeight={'bold'}>
						{dialog.title}
					</Text>
				</Box>
				<Picture
					cursor={
						dialog.imageHeight === 'auto' ? 'zoom-out' : 'zoom-in'
					}
					onClick={toggleZoom}
					width={dialog.imageHeight === 'auto' ? '100%' : 'auto'}
					maxHeight={dialog.imageHeight}
					src={dialog.src}
					borderRadius={'1rem'}
				/>
			</Dialog>
		</>
	);
};

export default GalleryGrid;
