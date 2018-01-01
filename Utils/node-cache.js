const NodeCache = require('node-cache');

const cache = new NodeCache();

cache.set('hasuraAuthApi', 'https://auth.caitiff92.hasura-app.io/v1/');

module.exports = {cache};
