const Person = props => {
    return React.createElement('div', { className: 'person' }, [
        React.createElement('h2', {}, props.name),
        React.createElement('p', {}, props.age),
        props.children,
    ]);
};

class App extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'app' },
            React.createElement('div', { className: 'persons' }, [
                React.createElement(Person, { name: 'John', age: 20 }),
                React.createElement(Person, { name: 'Jake', age: 30 }),
                React.createElement(Person, { name: 'Alex', age: 18 }, 'Drawing'),
            ])
        );
    }
}
/*
const App = () => {
    return React.createElement(
        'div',
        { className: 'app' },
        React.createElement('div', { className: 'persons' }, [
            React.createElement(Person, { name: 'John', age: 20 }),
            React.createElement(Person, { name: 'Jake', age: 30 }),
            React.createElement(Person, { name: 'Alex', age: 18 }, 'Drawing'),
        ])
    );
};
*/
ReactDOM.render(React.createElement(App), document.getElementById('root'));
