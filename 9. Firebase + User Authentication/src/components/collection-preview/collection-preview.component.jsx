import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
const CollectionPreview = ({ title, items }) => {
    const renderCollectionItem = () => {
        const limit = 4;
        return items.slice(0, limit).map(({ id, ...other }) => <CollectionItem key={id} {...other} />);
    };
    return (
        <div className="collection-preview">
            <h1 className="collection-preview__title">{title}</h1>
            <div className="preview">{renderCollectionItem()}</div>
        </div>
    );
};

export default CollectionPreview;
