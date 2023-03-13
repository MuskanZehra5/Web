
//import express from 'express';
// import nodemailer from 'node-mailer';
// import bodyparser from 'body-parser';
var express=require('express');
var nodemailer=require('nodemailer');
var app=express();
var bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}))


app.get('/',function(req,res){
    res.sendFile(__dirname+'/mail.html')
})

app.post('/send-mail',function(req,res){
    
    var transporter=nodemailer.createTransport({port:465,
    host:"smtp.gmail.com",
});
    console.log(req.body.email)
    var mailoptions = {
        from:"hassan@gmail.com",
        t:req.body.email,
        subject: req.body.subject,
        text: req.body.mailbody
    }
})
var server=app.listen(6060,function(){
    console.log('server running')
})

