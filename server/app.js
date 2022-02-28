const express = require('express');
const app = express();
const db = require('mariadb/callback');

const pool = db.createPool({
    host: 'raspberrypi',      
    user:'admin',
    password: 'abc123',
    database: 'app'
})

app.get('/', (req,res) => {
    const insert = 'SELECT * FROM todo;'; 
    pool.query(insert, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);          
        }
        }
      );
    });
 

app.listen(3001, () => {
    console.log(`App listening at http://localhost:3001`);    
})
 
