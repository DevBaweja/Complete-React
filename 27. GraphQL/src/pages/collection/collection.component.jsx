import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
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
