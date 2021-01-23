const fetch = require('node-fetch');

const getPeoplePromise = async fetch => {
    return fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => data);
};

const getPeople = async fetch => {
    const getResult = await fetch('https://swapi.dev/api/people');
    const data = await getResult.json();
    return data;
};

module.exports = { getPeoplePromise, getPeople };
