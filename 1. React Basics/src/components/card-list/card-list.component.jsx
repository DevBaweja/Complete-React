import React from 'react';

import Card from '../card/card.component.jsx';
import './card-list.styles.css';

const CardList = props => {
    const renderList = () => {
        return props.monsters.map(monster => <Card key={monster.id} monster={monster} set="set1" />);
    };
    return <div className="card-list">{renderList()}</div>;
};
export default CardList;
