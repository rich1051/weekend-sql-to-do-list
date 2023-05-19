const express = require('express');
const router = express.Router();
const pool = require ('../modules/pool');

router.get('/', (req, res) => {
        let queryText = 'SELECT * FROM "tasks" ORDER BY "description" DESC;';
        pool.query(queryText)
            .then(result => {
                res.send(result.rows);
            })
            .catch(error => {
                console.log('Query:', queryText, 'Error:', error);
                res.sendStatus(500);
            })
    });

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

router.delete('/:id', (req, res) => {

    let idToDelete = req.params.id;
        
    let queryText = 'DELETE FROM "tasks" WHERE "id" = $1;';
    
        pool.query(queryText, [idToDelete])
        .then((result) => {
            console.log('Task deleted!', result.rows);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error with deletion', error);
            res.sendStatus(500);
        })
    });

router.put('/:id', (req, res) => {

    let idToUpdate = req.params.id;
    let queryText = `UPDATE "tasks" SET "status" = 'true' WHERE "id" = $1;`;

        pool.query(queryText, [idToUpdate])
        .then((result) => {
            console.log('Task updated', result.rows);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error with complete', error);
            res.sendStatus(500);
        })
    });
    
    

module.exports = router;
