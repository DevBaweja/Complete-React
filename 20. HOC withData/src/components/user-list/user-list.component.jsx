import React from 'react';

class UserList extends React.Component {
    state = { users: [] };

    componentDidMount = async () => {
        const res = await fetch('http://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        this.setState({ users: data.splice(0, 5) });
    };

    renderUsers = () => {
        return this.state.users.map(user => (
            <div className="user" key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        ));
    };

    render() {
        return (
            <div className="container">
                <h1>User List</h1>
                {this.renderUsers()}
            </div>
        );
    }
}

export default UserList;
