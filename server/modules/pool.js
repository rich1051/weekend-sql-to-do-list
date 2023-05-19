const pg = require('pg'); 

const pool = new pg.Pool({
    // name of our database:
        database: 'weekendToDo',
    // where our database is:
        host: 'localhost', 
    // Postgres listens on 5432 by default:
        port: 5432
    });

module.exports = pool;