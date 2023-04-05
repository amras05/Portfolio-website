mongoose = require('mongoose');
mongoose.set('strictQuery', true);

//MongoDB Database URL
var mongoDatabase = 'mongodb://127.0.0.1:27017/employeeDetails1';

//created express server
mongoose.Promise = global.Promise;

//connect to the database
mongoose.connect(mongoDatabase, { useNewUrlParser: true, useUnifiedTopology: true}).then(
    () => { console.log('Database is connected') },
    err => { console.log('There is problem while connecting to the database '+ err)} );