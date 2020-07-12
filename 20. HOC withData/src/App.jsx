import React from 'react';

import UserProfile from './components/user-profile/user-profile.component';
import UserList from './components/user-list/user-list.component';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <UserList dataSource="users" />
                <UserProfile dataSource="posts" name="Dev Baweja" email="devbaweja576@gmail.com" />
            </div>
        );
    }
}

export default App;
