var express = require('express');
var path = require ('path');
var routes = require('./routes/routes');
var api = require('./routes/api');

const connecttoMongoBD = require('./connection');

connecttoMongoBD();

var app=express();

app.set('view engine', 'ejs');
app.use('/', routes);
app.use('/api', api);

app.use("/img", express.static(path.join(__dirname,'src')));
app.use("/styles", express.static(path.join(__dirname,'css')));

var puerto=process.env.PORT || 3000;

app.listen(puerto,()=>{
    console.log(`Servidor en el puerto ${puerto}`);
    
});