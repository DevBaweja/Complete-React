import React from 'react';
import withData from '../../withData';

const UserProfile = ({ data, name, email }) => {
    const renderPosts = () => {
        return data.map(post => (
            <div className="post" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
    };
    return (
        <div className="container">
            <h1>{name}</h1>
            <h2>{email}</h2>
            Posts:
            {renderPosts()}
        </div>
    );
};

export default withData(UserProfile, 'posts');
