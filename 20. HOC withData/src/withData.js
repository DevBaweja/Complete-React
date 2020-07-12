import React from 'react';

const withData = WrappedComponent => {
    class WithData extends React.Component {
        state = {
            data: [],
        };

        componentDidMount = async () => {
            const res = await fetch(`http://jsonplaceholder.typicode.com/${this.props.dataSource}`);
            const data = await res.json();
            this.setState({ data: data.splice(0, 5) });
        };

        render() {
            const { dataSource, ...other } = this.props;
            if (this.state.data.length === 0) return <h1>Loading</h1>;
            else return <WrappedComponent data={this.state.data} {...other} />;
        }
    }
    return WithData;
};
export default withData;
