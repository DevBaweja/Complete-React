import React, { useContext } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { CartContext } from '../../providers/cart/cart.provider';

import './collection-item.styles.scss';

const CollectionItem = ({ item, alreadyAdded }) => {
    const { addItem } = useContext(CartContext);
    const { name, price, imageUrl } = item;

    const style = { backgroundImage: `url(${imageUrl})` };

    return (
        <div className="collection-item">
            <div style={style} className="image" />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>
                {alreadyAdded ? 'Add more' : 'Add to cart'}
            </CustomButton>
        </div>
    );
};

export default CollectionItem;
