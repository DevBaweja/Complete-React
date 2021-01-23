const googleSearch = require('./script');

dbMock = ['k means clustering', 'density based clustering', 'clustering algorithm'];

describe('google search', () => {
    it('this is a test', () => {
        expect('dev').toBe('dev');
    });

    it('is searching properly', () => {
        expect(googleSearch('algo', dbMock)).toEqual(['clustering algorithm']);
    });

    it('work with invalid inputs', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });

    it('does not return more than limited search', () => {
        expect(googleSearch('clustering', dbMock)).toEqual(['k means clustering', 'density based clustering']);
    });
});
