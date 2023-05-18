const express = require('express');
const router = express.Router();
const pool = require ('../modules/pool');

router.post('/', (req, res) => {
        let newTask = req.body;
        console.log('req.body:', req.body);
    // parameterized query:
        let queryText = `
        INSERT INTO "tasks" ("description", "location")
        VALUES ($1, $2);
        `;
        
    // these values are substituted for $1 and $2
        let values = [newTask.description, newTask.location];
    
    // pass queryText and array of values
        pool.query(queryText, values)
            .then(result => {
                res.sendStatus(201);
            })
            .catch(error => {
                console.log('Query:', queryText, 'Error:', error);
                res.sendStatus(500);
            })
    });

module.exports = router;
