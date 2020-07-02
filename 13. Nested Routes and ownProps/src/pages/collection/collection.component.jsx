import React from 'react';
import { connect } from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    console.log(collection);

    return (
        <div className="collection-page">
            <h2>CollectionPage</h2>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionType)(state),
});
export default connect(mapStateToProps)(CollectionPage);
