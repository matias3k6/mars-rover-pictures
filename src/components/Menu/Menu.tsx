import React from 'react';
import {
	Menu as ChakraMenu,
	MenuButton,
	MenuList,
	MenuItem,
	Box,
	Button,
	IconButton,
} from '@chakra-ui/react';
import { MenuProps } from './types';
import { FaChevronDown, FaTrash } from 'react-icons/fa';

const Menu = ({
	label,
	options,
	handleSelect,
	handleDelete,
}: MenuProps): JSX.Element => {
	return (
		<ChakraMenu>
			<MenuButton
				as={Button}
				rightIcon={<FaChevronDown />}
				disabled={options.length <= 0}
			>
				{label}
			</MenuButton>
			<MenuList>
				{options.map(({ label, value }) => (
					<MenuItem key={value}>
						<Box
							display={'flex'}
							justifyContent={'space-between'}
							width={'100%'}
						>
							<Button
								onClick={() => handleSelect(value)}
								variant={'ghost'}
								marginRight={'1rem'}
							>
								{label}
							</Button>
							<IconButton
								aria-label={'Delete option'}
								icon={<FaTrash />}
								onClick={() => handleDelete(value)}
								colorScheme={'red'}
							/>
						</Box>
					</MenuItem>
				))}
			</MenuList>
		</ChakraMenu>
	);
};

export default Menu;
