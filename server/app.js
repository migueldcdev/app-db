const express = require('express');
const mariadb = require('mariadb');
const app = express();



const pool = mariadb.createPool({
    port:3306,
    host: '',
    user:'',
    password: '',
    connectionLimit: 5,
    database: "app"
})

async function asyncFunction() {
    let conn;
    //const insert = 'INSERT INTO todo (task) VALUES ("Do the laundry")' 
    try {
      //pool.query(insert, (err,))
      conn = await pool.getConnection();
      console.log(conn);
      //const rows = await conn.query("SELECT * FROM todo");
      //console.log(rows); //[ {val: 1}, meta: ... ]
      //const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
      
      console.log(rows); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
  }

  asyncFunction();



/*app.get('/',(req, res) => {
    const insert = 'INSERT INTO todo (task) VALUES ("Do the laundry")';
    
    pool.query(insert, (err,result) => {
    res.send("Database updated")
});
    
})*/

app.listen(3001, () => {
    console.log("Running...");
})
