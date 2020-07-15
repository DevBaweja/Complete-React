import React from 'react';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionItem from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollections } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector';

import './shop.styles.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionItemWithSpinner = WithSpinner(CollectionItem);

class Shop extends React.Component {
    componentDidMount() {
        const { fetchCollections } = this.props;
        fetchCollections();
    }
    render() {
        const { isCollectionFetching, isCollectionLoaded, match } = this.props;
        return (
            <div className="shop">
                <Switch>
                    <Route
                        exact
                        path={`${match.path}`}
                        render={props => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
                    ></Route>
                    <Route
                        path={`${match.path}/:collectionType`}
                        render={props => <CollectionItemWithSpinner isLoading={!isCollectionLoaded} {...props} />}
                    ></Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded,
});
const mapDispatchToProps = dispatch => bindActionCreators({ fetchCollections }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
