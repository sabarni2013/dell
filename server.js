const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'project'
})
connection.connect(err => {
    if (err) throw err;
    else console.log(' database connected successfully');
});
app.post('/saveData',((req,res) => {
   console.log(req.body);
   let val = req.body.value;

   connection.query('insert into calculator VALUES ('+val.firstNumber+', '+val.secondNumber+', '+Number(val.firstNumber)+Number(val.secondNumber)+')', function (err, result) {
    if (err) throw err;
    res.send(result);
   });
}));
app.get('/getData',(req,res) => {
    connection.query('SELECT * FROM project.calculator ', function (err, result) {
        if(err) throw err;
        res.send(result);
    })
});
app.listen(8000,()=>{
    console.log('listen to 8000 port');
})
