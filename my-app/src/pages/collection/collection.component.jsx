import React from 'react';
import { connect } from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
    const renderCollectionItem = items => {
        return items.map(item => <CollectionItem key={item.id} item={item} />);
    };
    return (
        <CollectionsContext.Consumer>
            {collections => {
                const collection = collections[match.params.collectionType];
                const { title, items } = collection;

                return (
                    <div className="collection-page">
                        <h2 className="title">{title}</h2>
                        <div className="items">{renderCollectionItem(items)}</div>
                    </div>
                );
            }}
        </CollectionsContext.Consumer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionType)(state),
});
export default connect(mapStateToProps)(CollectionPage);
