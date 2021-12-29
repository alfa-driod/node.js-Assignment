const express = require('express');
const mongoose= require('mongoose');

const userController= require('./user controller/user_controller')
const server =express();
mongo_url_url='mongodb+srv://Prince:pharisee@cluster0.q2loh.mongodb.net/hospital?retryWrites=true&w=majority';

server.use(express.json())
server.listen(4000,function (req,res) {
    console.log('server has started running')
    mongoose.connect('mongodb+srv://Prince:pharisee@cluster0.q2loh.mongodb.net/hospital?retryWrites=true&w=majority')
    .then(function () {
        console.log('db is running')
    })
    .catch(function(error){
        console.log('DB is not connected:',error.message);

    });
})  

server.post('/user',userController.adduser)

server.get('/user',userController.getalluser)
