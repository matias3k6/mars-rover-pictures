import { ChangeEvent } from 'react';
import { RoverType } from 'global/rovers';

export interface FiltersSelectProps {
	handleSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
	rover: RoverType;
}

export interface FiltersDatePickerProps {
	handleDatePicker: (event: ChangeEvent<HTMLInputElement>) => void;
	date: string;
}
