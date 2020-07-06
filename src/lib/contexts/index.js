import { createContext } from 'react';
import { BevelStore } from 'store';

export const storesContext = createContext({
	bevelStore: new BevelStore(),
});
