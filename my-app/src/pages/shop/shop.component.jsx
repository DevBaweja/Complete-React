import React from 'react';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionItem from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import './shop.styles.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionItemWithSpinner = WithSpinner(CollectionItem);

class Shop extends React.Component {
    state = {
        loading: true,
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collection');

        collectionRef.onSnapshot(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            this.props.updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    }
    render() {
        const { match } = this.props;
        return (
            <div className="shop">
                <Switch>
                    <Route
                        exact
                        path={`${match.path}`}
                        render={props => <CollectionOverviewWithSpinner isLoading={this.state.loading} {...props} />}
                    ></Route>
                    <Route
                        path={`${match.path}/:collectionType`}
                        render={props => <CollectionItemWithSpinner isLoading={this.state.loading} {...props} />}
                    ></Route>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateCollections }, dispatch);

export default connect(null, mapDispatchToProps)(Shop);
