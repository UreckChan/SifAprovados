var route = require('express').Router();


route.get('/',(req,res)=>{
    res.render('showData');
});

module.exports = route;