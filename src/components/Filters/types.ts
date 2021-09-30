import { ChangeEvent } from 'react';
import { RoverType } from 'global/types';

export interface FiltersSelectProps {
	handleSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
	rover: RoverType;
}

export interface FiltersDatePickerProps {
	handleDatePicker: (event: ChangeEvent<HTMLInputElement>) => void;
	date: string;
}
