const { response, request } = require('express')


const test= async(req= request, res =  response) =>{
    console.log("Test GET");
    res.json({status:200, message: "exito"})
}


module.exports={
    test
}