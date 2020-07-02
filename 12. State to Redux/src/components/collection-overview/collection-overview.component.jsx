import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollections } from '../../redux/shop/shop.selector';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
    const renderCollections = () => {
        return collections.map(({ id, ...other }) => <CollectionPreview key={id} {...other}></CollectionPreview>);
    };
    return <div className="collection-overview">{renderCollections()}</div>;
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
