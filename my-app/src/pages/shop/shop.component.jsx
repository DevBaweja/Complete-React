import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionItem from '../collection/collection.component';

import './shop.styles.scss';

const Shop = ({ match }) => {
    return (
        <div className="shop">
            <Switch>
                <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
                <Route path={`${match.path}/:collectionType`} component={CollectionItem}></Route>
            </Switch>
        </div>
    );
};

export default Shop;
