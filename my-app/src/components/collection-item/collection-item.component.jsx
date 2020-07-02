import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item, alreadyAdded, addItem }) => {
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

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
