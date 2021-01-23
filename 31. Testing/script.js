const googleDatabase = [
    'regression',
    'classification',
    'k nearest neighbor',
    'support vector machine',
    'reinforcement learning',
    'k means clustering',
    'density based clustering',
];

const maxSearch = 2;
const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => website.includes(searchInput));
    return matches.slice(0, maxSearch);
};

console.log(googleSearch('cluster', googleDatabase));

module.exports = googleSearch;
