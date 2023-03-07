const api = require('express').Router();

const Datos = require('../models/modeloDatos');


api.get('/getData', async(req, res)=>{
    try{
        res.json(await Datos.find({}));
    } catch (e){
        console.error(`Error: ${e}`);
    }
});

api.get('/setDataHumedad/:value', async(req, res)=>{
    try{
        res.send(await Datos.findOneAndUpdate(
            {
                nombre : "Humedad"
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


api.get('/setDataMovimiento/:value/:sensor', async(req, res)=>{
    try{
        res.send(await Datos.findOneAndUpdate(
            {
                nombre : "Movimiento"
            },
            {
                $push: {
                    datos: {
                        $each:[{fecha: new Date().toISOString(), valor: req.params.value, sensor: req.params.sensor}],
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