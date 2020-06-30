import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem, cartItems }) => {
    const { name, price, imageUrl } = item;
    const style = { backgroundImage: `url(${imageUrl})` };
    const text = {
        new: 'Add to cart',
        old: 'Add more',
    };
    const renderText = () => {
        const exists = cartItems.find(cur => cur.id === item.id);
        if (exists) {
            return text.old;
        }
        return text.new;
    };
    return (
        <div className="collection-item">
            <div style={style} className="image" />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>
                {renderText()}
            </CustomButton>
        </div>
    );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
});
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
