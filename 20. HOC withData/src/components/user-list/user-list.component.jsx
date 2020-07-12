import React from 'react';
import withData from '../../withData';

const UserList = ({ data }) => {
    const renderUsers = () => {
        return data.map(user => (
            <div className="user" key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        ));
    };

    return (
        <div className="container">
            <h1>User List</h1>
            {renderUsers()}
        </div>
    );
};

export default withData(UserList);
