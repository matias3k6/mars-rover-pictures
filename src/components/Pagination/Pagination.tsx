import React, { useContext } from 'react';
import { IconButton } from '@chakra-ui/button';
import { Box, HStack, Text } from '@chakra-ui/layout';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import RoversContex from 'contexts/Rovers/context';

const Pagination = (): JSX.Element => {
	const { roversFilters, roversData, handleChangeFilter } =
		useContext(RoversContex);
	const { page } = roversFilters;
	const count = roversData.pictures.length;

	const back = () => handleChangeFilter('page', page - 1);
	const forwdard = () => handleChangeFilter('page', page + 1);

	const backIsDisabled = page <= 1;
	const fordwardIsDisabled = count < 25;

	return (
		<Box alignSelf={'flex-end'}>
			<HStack spacing={'1rem'} paddingY={'1rem'}>
				<Text>Current page: {page}</Text>
				<IconButton
					aria-label={'button-back'}
					button={'forward'}
					icon={<FaChevronLeft />}
					disabled={backIsDisabled}
					onClick={back}
					colorScheme={backIsDisabled ? 'gray' : 'green'}
				/>
				<IconButton
					aria-label={'button-back'}
					button={'forward'}
					icon={<FaChevronRight />}
					disabled={fordwardIsDisabled}
					onClick={forwdard}
					colorScheme={fordwardIsDisabled ? 'gray' : 'green'}
				/>
			</HStack>
		</Box>
	);
};

export default Pagination;
