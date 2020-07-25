import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
    const renderCollections = () => {
        return collections.map(({ id, ...other }) => <CollectionPreview key={id} {...other}></CollectionPreview>);
    };
    return <div className="collection-overview">{renderCollections()}</div>;
};

export default CollectionOverview;
