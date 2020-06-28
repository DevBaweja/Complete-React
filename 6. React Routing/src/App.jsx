import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/topic">Go to topic</Link>
        </div>
    );
};
const Topic = props => {
    console.log(props);

    return (
        <div>
            <h1>Topic</h1>
            <Link to={`${props.match.url}/1`}>Go to 1</Link>
            <Link to={`${props.match.url}/2`}>Go to 2</Link>
            <Link to={`${props.match.url}/3`}>Go to 3</Link>
        </div>
    );
};

const TopicDetail = props => {
    console.log(props);
    return (
        <div>
            <h1>Topic Detail: {props.match.params.id}</h1>
            <Link to="/topic">Go Back</Link>
        </div>
    );
};
class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/topic" component={Topic} />
                    <Route path="/topic/:id" component={TopicDetail} />
                </Switch>
            </div>
        );
    }
}

export default App;
