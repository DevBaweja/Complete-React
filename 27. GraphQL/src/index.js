import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate as Persist } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './index.css';
import App from './App.jsx';

const link = createHttpLink({
    uri: 'https://crwn-clothing.com/',
});
const cache = new InMemoryCache();

const client = new ApolloClient({
    link,
    cache,
});

client.writeData({
    data: {
        cartHidden: true,
    },
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Router>
                <Persist persistor={persistor}>
                    <App />
                </Persist>
            </Router>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
);
