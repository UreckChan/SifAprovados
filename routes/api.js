const api = require('express').Router();

const Datos = require('../models/modeloDatos');


api.get('/getData', async(req, res)=>{
    try{
        res.json(await Datos.find({}));
    } catch (e){
        console.error(`Error: ${e}`);
    }
});

api.get('/setData/:name/:value', async(req, res)=>{
    try{
        res.send(await Datos.findOneAndUpdate(
            {
                nombre : req.params.name
                
            },
            {
                $push: {
                    datos: {
                        $each:[{fecha: new Date().toISOString(), valor: req.params.value}],
                        $position:0
                    
                    } 
                }
            }
        ));
       // console.log();
    } catch (e){
        console.error(`Error: ${e}`);
    }
});

module.exports = api;