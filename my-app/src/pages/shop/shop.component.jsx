import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionItem from '../collection/collection.component';

import './shop.styles.scss';

class Shop extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {}
    render() {
        const { match } = this.props;
        return (
            <div className="shop">
                <Switch>
                    <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
                    <Route path={`${match.path}/:collectionType`} component={CollectionItem}></Route>
                </Switch>
            </div>
        );
    }
}

export default Shop;
