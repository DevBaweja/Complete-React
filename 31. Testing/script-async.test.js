const fetch = require('node-fetch');
const swapi = require('./script-async');

it('calls swapi to get people with done', done => {
    expect.assertions(1);
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(82);
        done();
    });
});

it('calls swapi to get people with a promise with return', () => {
    expect.assertions(1);

    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(82);
    });
});

it('calls swapi to get people with a promise with async await', async () => {
    expect.assertions(1);

    const data = await swapi.getPeoplePromise(fetch);

    expect(data.count).toEqual(82);
});

it('calls swapi to get people with a promise', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(5);
    });
});
