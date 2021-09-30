import React from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Link, Text } from '@chakra-ui/layout';

const Footer = (): JSX.Element => {
	const backgroundColor = useColorModeValue('gray.100', 'gray.900');
	const anchorColor = useColorModeValue('blue', 'cyan');

	return (
		<Box
			backgroundColor={backgroundColor}
			textAlign={'center'}
			padding={'1rem'}
		>
			<Text>
				Developed by{' '}
				<Link
					color={anchorColor}
					href={'https://github.com/matias3k6/'}
					target={'_blank'}
					rel={'noopener'}
				>
					matias3k6
				</Link>
			</Text>
			<Text fontSize={'.75rem'}>
				Powered by{' '}
				<Link
					color={anchorColor}
					href={'https://reactjs.org/'}
					target={'_blank'}
					rel={'noopener'}
				>
					React
				</Link>{' '}
				and{' '}
				<Link
					color={anchorColor}
					href={'https://chakra-ui.com/'}
					target={'_blank'}
					rel={'noopener'}
				>
					Chakra UI
				</Link>
				. Resources via{' '}
				<Link
					color={anchorColor}
					href={'https://api.nasa.gov/'}
					target={'_blank'}
					rel={'noopener'}
				>
					Nasa API
				</Link>
				.
			</Text>
		</Box>
	);
};

export default Footer;
