const swapi = require('./script-async');

it('calls swapi to get people with a promise by mocking', async () => {
    const mockFetch = jest.fn().mockReturnValue(
        Promise.resolve({
            json: () =>
                Promise.resolve({
                    count: 82,
                    results: [0, 1, 2, 3, 4, 5],
                }),
        })
    );

    expect.assertions(4);
    const data = await swapi.getPeoplePromise(mockFetch);

    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);

    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
});
