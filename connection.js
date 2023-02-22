const mongoose = require('mongoose');


const connecttoMongoBD=()=>{

    const linkMongoDB = 'mongodb+srv://APROVADOS:APROVADOSSIF2023@sif.5gzdhzk.mongodb.net/SIF';
    mongoose.set('strictQuery', false);
    mongoose.connect(linkMongoDB)
    .then(()=>{
        console.log('Conexion correcta a MongoDB');
    })
    .catch((e)=>{
        console.log(`Error en la conecion a mongoDB ${e}`);
    });
}

module.exports=connecttoMongoBD;