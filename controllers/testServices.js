const { response, request } = require('express')


const testServices= async(req= request, res =  response) =>{
    console.log("Test Servicios and base de datos");
    res.json({status:200, message: "exito"})
}


module.exports={
    testServices
}