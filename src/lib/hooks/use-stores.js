import { useContext } from 'react';
import { storesContext } from 'lib/contexts';

export const useStores = () => useContext(storesContext);
