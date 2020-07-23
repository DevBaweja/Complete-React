import React, { useContext } from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import { CartContext } from '../../providers/cart/cart.provider';

import './collection-preview.styles.scss';
const CollectionPreview = ({ title, items }) => {
    const { cartItems } = useContext(CartContext);
    const renderCollectionItem = () => {
        const limit = 4;
        return items.slice(0, limit).map(item => {
            const already = cartItems.find(cur => cur.id === item.id);
            return <CollectionItem key={item.id} item={item} alreadyAdded={already ? 'alreadyAdded' : ''} />;
        });
    };
    return (
        <div className="collection-preview">
            <h1 className="collection-preview__title">{title}</h1>
            <div className="preview">{renderCollectionItem()}</div>
        </div>
    );
};

export default CollectionPreview;
