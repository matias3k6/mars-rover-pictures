import { RoverType } from 'global/rovers';

export const rovers = [
	{
		label: 'Curiosity',
		value: RoverType.Curiosity,
		cameras: [
			'FHAZ',
			'RHAZ',
			'MAST',
			'CHEMCAM',
			'MAHLI',
			'MARDI',
			'NAVCAM',
		],
	},
	{
		label: 'Opportunity',
		value: RoverType.Opportunity,
		cameras: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
	},
	{
		label: 'Spirit',
		value: RoverType.Spirit,
		cameras: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
	},
];

export const cameras = [
	{ value: '', label: 'All' },
	{ value: 'FHAZ', label: 'Front Hazard Avoidance Camera' },
	{ value: 'RHAZ', label: 'Rear Hazard Avoidance Camera' },
	{ value: 'MAST', label: 'Mast Camera' },
	{ value: 'CHEMCAM', label: 'Chemistry and Camera Complex' },
	{ value: 'MAHLI', label: 'Mars Hand Lens Imager' },
	{ value: 'MARDI', label: 'Mars Descent Imager' },
	{ value: 'NAVCAM', label: 'Navigation Camera' },
	{ value: 'PANCAM', label: 'Panoramic Camera	' },
	{
		value: 'MINITES',
		label: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
	},
];
