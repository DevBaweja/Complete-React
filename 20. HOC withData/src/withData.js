import React from 'react';

const withData = (WrappedComponent, dataSource) => {
    class WithData extends React.Component {
        state = {
            data: [],
        };

        componentDidMount = async () => {
            const res = await fetch(`http://jsonplaceholder.typicode.com/${dataSource}`);
            const data = await res.json();
            this.setState({ data: data.splice(0, 5) });
        };

        render() {
            if (this.state.data.length === 0) return <h1>Loading</h1>;
            else return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    }
    return WithData;
};
export default withData;
