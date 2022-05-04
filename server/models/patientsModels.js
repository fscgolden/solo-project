const { Pool } = require('pg');

const PG_URI = 'postgres://gthifiux:nNCgALeW4jJOCodO21heQn_HQ0XzBd2w@chunee.db.elephantsql.com/gthifiux';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};