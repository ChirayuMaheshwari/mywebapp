const express=require('express');
const app=express();
app.set('view engine','ejs');
app.listen(process.env.PORT||8080)

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL|| 'postgres://postgres:@localhost:5432/postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

console.log(client);

app.get('/',function(req,res){
    client.query("insert into my_info(name) values($1);",['chirayu'],function(err,result){
        if(err)
        console.log(err);
        else
        console.log(result);
    })
    res.render(__dirname+'//views//index.ejs');
    //res.send({name:'chirayu'});
})