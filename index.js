const express=require('express');
const app=express();
app.set('view engine','ejs');
app.listen(process.env.PORT||8080)

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();



app.get('/',function(req,res){
    client.query('create table my_info(name varchar(200));',function(err,res){
        if(err)
        console.log("error occured");
        else
        console.log("successful");
    })
    res.render(__dirname+'//views//index.ejs');
    //res.send({name:'chirayu'});
})