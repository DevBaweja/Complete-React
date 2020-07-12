import React from 'react';

class UserProfile extends React.Component {
    state = { posts: [] };

    componentDidMount = async () => {
        const res = await fetch('http://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        this.setState({ posts: data.splice(0, 5) });
    };
    renderPosts = () => {
        return this.state.posts.map(post => (
            <div className="post" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
    };
    render() {
        return (
            <div className="container">
                <h1>{this.props.name}</h1>
                <h2>{this.props.email}</h2>
                Posts:
                {this.renderPosts()}
            </div>
        );
    }
}

export default UserProfile;
