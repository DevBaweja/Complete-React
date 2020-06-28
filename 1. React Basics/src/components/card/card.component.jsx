import React from 'react';
import './card.styles.css';
const Card = props => {
    const url = `https://robohash.org/${props.monster.id}?set=${props.set}`;
    return (
        <div className="card">
            <img src={url} alt="monster" />
            <h4>{props.monster.name}</h4>
            <p>{props.monster.email}</p>
        </div>
    );
};
Card.defaultProps = {
    set: 'set5',
};
export default Card;
