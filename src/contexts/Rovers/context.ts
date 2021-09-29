import { createContext } from 'react';
import { roversDefaultValues } from './defaultValues';
import { RoversInitialValues } from './types';

const RoversContex = createContext<RoversInitialValues>(roversDefaultValues);

export default RoversContex;
