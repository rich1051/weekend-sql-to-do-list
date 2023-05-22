const pg = require('pg'); 
let pool;

if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}
else {
    pool = new pg.Pool({
    // name of our database:
        database: 'weekendToDo',
    // where our database is:
        host: 'localhost', 
    // Postgres listens on 5432 by default:
        port: 5432
    });
};

module.exports = pool;