import React from 'react';

import './shop.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import collections from './shop.data';
class Shop extends React.Component {
    state = {
        collections,
    };

    renderCollections = () => {
        return this.state.collections.map(({ id, ...other }) => (
            <CollectionPreview key={id} {...other}></CollectionPreview>
        ));
    };
    render() {
        return <div className="shop">{this.renderCollections()}</div>;
    }
}

export default Shop;
