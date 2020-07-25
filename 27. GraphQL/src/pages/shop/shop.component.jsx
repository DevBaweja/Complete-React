import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { default as CollectionOverview } from '../../components/collection-overview/collection-overview.container';
import { default as CollectionPage } from '../collection/collection.container';

import './shop.styles.scss';

const Shop = ({ match }) => {
    return (
        <div className="shop">
            <Switch>
                <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
                <Route path={`${match.path}/:collectionType`} component={CollectionPage}></Route>
            </Switch>
        </div>
    );
};

export default Shop;
