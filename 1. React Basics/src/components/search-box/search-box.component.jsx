import React from 'react';
import './search-box.styles.css';

const SearchBox = props => {
    return (
        <div className="search-box">
            <input type="search" className="search" placeholder={props.placeholder} onChange={props.change} />
        </div>
    );
};
export default SearchBox;
