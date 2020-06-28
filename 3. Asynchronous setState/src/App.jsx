import React from 'react';

import './App.css';

class App extends React.Component {
    /*
    state = {
        index: 0 + this.props.init,
    };
    */

    constructor(props) {
        super(props);
        this.state = {
            index: 0 + this.props.init,
        };
    }

    /*
    updateStateHandler = async () => {
        await this.setState({ index: this.state.index + 1 });
        console.log(this.state.index);
    };
    */
    updateStateHandler = async () => {
        console.log(this.props);

        await this.setState((prevState, prevProps) => {
            return {
                index: prevState.index + 1,
            };
        });

        console.log(this.state);
    };
    render() {
        return (
            <div className="app">
                <p>{this.state.index}</p>
                <button onClick={this.updateStateHandler}>Update State</button>
            </div>
        );
    }
}

export default App;
