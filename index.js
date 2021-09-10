const express=require('express');
const app=express();
app.set('view engine','ejs');
app.listen(process.env.PORT||8080)

const { Client } = require('pg')
const client = new Client({
  user: 'skutsczjnnudqw',
  host: 'ec2-54-147-126-173.compute-1.amazonaws.com',
  database: 'dbb1huvj6b6jdd',
  password: 'cfc73582f621be8f6c9a0da9a6a6f259cf0398836ff8407d002a866ade1e5457',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get('/',function(req,res){
    res.render(__dirname+'//views//index.ejs');
    //res.send({name:'chirayu'});
})