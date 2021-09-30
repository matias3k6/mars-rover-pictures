import React, { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
} from '@chakra-ui/modal';
import { DialogProps } from './types';
import { VStack } from '@chakra-ui/layout';

const Dialog = ({ open, onClose, children }: DialogProps): JSX.Element => {
	const { isOpen, onOpen, onClose: onCloseDialog } = useDisclosure();

	const handleClose = () => {
		onCloseDialog();
		onClose && onClose();
	};

	useEffect(() => {
		if (open) onOpen();
	}, [open]);

	return (
		<Modal onClose={handleClose} size={'full'} isOpen={isOpen}>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalBody>
					<VStack>{children}</VStack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default Dialog;
