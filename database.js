var pgp = require('pg-promise')();

const dbConfig = {
   host: 'localhost',
   port: 5432,
   database: 'lab6',
   user: 'postgres',
   password: 'Pokemon10!' // TODO: Fill in your PostgreSQL password here.
                // Use empty string if you did not set a password
};

var db = pgp(dbConfig);
var dbConfig = process.env.DATABASE_URL;

module.exports = db;
