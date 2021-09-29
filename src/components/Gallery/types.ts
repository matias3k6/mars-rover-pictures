import { RoversProviderData } from 'contexts/Rovers/types';

export interface GalleryGridProps {
	pictures: RoversProviderData['pictures'];
	isLoading?: boolean;
}
