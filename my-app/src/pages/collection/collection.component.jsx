import React from 'react';
import { connect } from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop.selector';

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

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionType)(state),
});
export default connect(mapStateToProps)(CollectionPage);
