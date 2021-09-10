const express=require('express');
const app=express();
app.set('view engine','ejs');
app.listen(process.env.PORT||8080)
app.get('/',function(req,res){
    res.send({name:'chirayu'});
})