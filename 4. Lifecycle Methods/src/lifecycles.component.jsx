import React from 'react';

class Lifecycles extends React.Component {
    constructor() {
        super();
        console.log('Constructor');
    }
    componentDidMount() {
        console.log('Mounted');
    }
    componentDidUpdate() {
        console.log('Update');
    }
    componentWillUnmount() {
        console.log('Unmount');
    }
    shouldComponentUpdate(props, state) {
        console.log(props, state);
        console.log(this.props);

        return this.props.text === props.text;
    }
    render() {
        console.log('Render');
        return <p>{this.props.text}</p>;
    }
}

export default Lifecycles;
