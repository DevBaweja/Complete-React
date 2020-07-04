import React from 'react';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionItem from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import './shop.styles.scss';

class Shop extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collection');

        collectionRef.onSnapshot(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            this.props.updateCollections(collectionsMap);
        });
    }
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

const mapDispatchToProps = dispatch => bindActionCreators({ updateCollections }, dispatch);

export default connect(null, mapDispatchToProps)(Shop);
