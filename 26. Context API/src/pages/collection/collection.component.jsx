import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
    const collections = useContext(CollectionsContext);
    const collection = collections[match.params.collectionType];
    const { title, items } = collection;

    const renderCollectionItem = () => {
        return items.map(item => <CollectionItem key={item.id} item={item} />);
    };
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">{renderCollectionItem()}</div>
        </div>
    );
};

export default CollectionPage;
