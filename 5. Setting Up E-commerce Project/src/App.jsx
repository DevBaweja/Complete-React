import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <HomePage />
            </div>
        );
    }
}

export default App;
