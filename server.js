const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
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
   console.log('enter post api....');
   let val = req.body;
   let sum = Number(val.firstNumber)+Number(val.secondNumber);
   connection.query('delete from calculator where id=1');
   connection.query('insert into calculator VALUES (1,'+val.firstNumber+', '+val.secondNumber+', '+sum+')', function (err, result) {
    if (err) throw err;
    res.send(result);
   });
}));
app.get('/getData',(req,res) => {
    console.log('enter get api....');
    connection.query("SELECT  firstNumber,secondNumber, sum FROM calculator", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
app.listen(8000,()=>{
    console.log('listen to 8000 port');
})
