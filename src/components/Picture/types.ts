import { ImageProps } from '@chakra-ui/image';

export interface PictureProps extends ImageProps {
	src: string;
	alt?: string;
}
