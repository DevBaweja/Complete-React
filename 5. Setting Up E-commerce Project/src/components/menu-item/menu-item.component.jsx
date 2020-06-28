import React from 'react';

import './menu-item.styles.scss';
const MenuItem = ({ title, imageUrl, size }) => {
    const style = { backgroundImage: `url(${imageUrl})` };
    return (
        <div className={`menu-item ${size ? size : ''}`}>
            <div style={style} className="background-image" />
            <div className="content">
                <h1 className="content__title">{title}</h1>
                <span className="content__cta">Shop Now</span>
            </div>
        </div>
    );
};
export default MenuItem;
