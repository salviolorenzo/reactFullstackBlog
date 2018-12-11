const pgp = require('pg-promise')({
  query: e => {
    console.log('QUERY: ', e.query);
    if (e.params) {
      console.log('PARAMS: ', e.params);
    }
  }
});

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'rBlog-db'
});

module.exports = db;
