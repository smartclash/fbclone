const NodeCache = require('node-cache');

const cache = new NodeCache();

cache.set('hasuraAuthApi', 'https://auth.grade91.hasura-app.io/v1/');

module.exports = {cache};
