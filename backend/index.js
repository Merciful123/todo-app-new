import express from "express"
import mysql from "mysql";

const app = express()

const port = 8000

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password: "Mysql@313",
    database: "todo-test",
    
})

 

app.get("/", (req, res) => {
    res.send("This is our backend test")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";

    db.query(q,(err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})