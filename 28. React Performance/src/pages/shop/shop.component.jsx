import React, { useEffect, lazy, Suspense } from 'react';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';
import './shop.styles.scss';

const CollectionOverviewContainer = lazy(() =>
    import('../../components/collection-overview/collection-overview.container')
);
const CollectionPageContainer = lazy(() => import('../collection/collection.component'));

const Shop = ({ match, fetchCollectionsStart }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);
    // ComponentWillUnmount
    /*
    useEffect(() => {
        Clean Up fn
        return () => {};
    });
    */
    return (
        <div className="shop">
            <Switch>
                <Suspense fallback={<Spinner />}>
                    <Route exact path={`${match.path}`} component={CollectionOverviewContainer}></Route>
                    <Route path={`${match.path}/:collectionType`} component={CollectionPageContainer}></Route>
                </Suspense>
            </Switch>
        </div>
    );
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchCollectionsStart }, dispatch);

export default connect(null, mapDispatchToProps)(Shop);
