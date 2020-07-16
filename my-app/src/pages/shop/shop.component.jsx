import React from 'react';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import './shop.styles.scss';

class Shop extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }
    render() {
        const { match } = this.props;
        return (
            <div className="shop">
                <Switch>
                    <Route exact path={`${match.path}`} component={CollectionOverviewContainer}></Route>
                    <Route path={`${match.path}/:collectionType`} component={CollectionPageContainer}></Route>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchCollectionsStart }, dispatch);

export default connect(null, mapDispatchToProps)(Shop);
