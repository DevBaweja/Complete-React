import React from 'react';
import axios from 'axios';

import SearchBox from './components/search-box/search-box.component.jsx';
import CardList from './components/card-list/card-list.component.jsx';
import './App.css';

class App extends React.Component {
    // State
    state = {
        url: 'https://jsonplaceholder.typicode.com/users',
        monsters: [],
        filterMonsters: [],
        search: '',
    };

    // Lifecycles
    componentDidMount = async () => {
        // API Call
        const { data } = await axios(this.state.url);
        this.setState({ monsters: data, filterMonsters: data });
    };

    // Handlers
    filterHandler = async event => {
        const { monsters } = this.state;
        const search = event.target.value;
        const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()));

        await this.setState({
            search,
            filterMonsters,
        });

        console.log(this.state);
    };

    render() {
        return (
            <div className="App">
                <h1 className="heading">Monsters Rolodex</h1>
                <SearchBox change={this.filterHandler} placeholder="Search Monsters" />
                <CardList monsters={this.state.filterMonsters}></CardList>
            </div>
        );
    }
}

export default App;
