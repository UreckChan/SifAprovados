var route = require('express').Router();


route.get('/',(req,res)=>{
    res.render('showData');
});

route.get('/us', (req,res)=>{
    res.render('us');
});

module.exports = route;