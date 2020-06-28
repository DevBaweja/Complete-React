import React from 'react';

import Lifecycles from './lifecycles.component.jsx';
import './App.css';

class App extends React.Component {
    state = {
        showChild: true,
        text: 'Hello',
    };

    showChildHandler = () => {
        this.setState(state => ({
            showChild: !state.showChild,
        }));
    };

    setTextHandler = () => {
        this.setState(state => ({
            text: state.text,
        }));
    };

    renderLifecycles = () => {
        if (this.state.showChild) return <Lifecycles text={this.state.text} />;
    };
    render() {
        return (
            <div className="app">
                <button onClick={this.showChildHandler}>Toggle Lifecycle</button>
                <button onClick={this.setTextHandler}>Update Text</button>

                {this.renderLifecycles()}
            </div>
        );
    }
}

export default App;
