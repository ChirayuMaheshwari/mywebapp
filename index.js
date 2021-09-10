const express=require('express');
const app=express();
app.set('view engine','ejs');
app.listen(process.env.PORT||8080)
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL|| 'postgres://postgres:@localhost:5432/postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();



app.get('/',function(req,res){
    res.render(__dirname+'//views//index.ejs');
    //res.send({name:'chirayu'});
})

app.post('/data',function(req,res){
res.render(__dirname+'//views//result.ejs',{name:req.body.name});
})