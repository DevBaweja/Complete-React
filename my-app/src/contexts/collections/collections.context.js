import { createContext } from 'react';
import collections from './shop.data';

const CollectionsContext = createContext(collections);

export default CollectionsContext;
