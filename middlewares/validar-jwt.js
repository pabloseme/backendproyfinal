const { request } = require('express')
const jwt= require('jsonwebtoken')
const Usuario=require('../models/usuario')

const validarJWT=async (req=request,res,next)=>{
    const token=req.header("x-token")

    ///verificar si viene el toke
    if(!token){
        res.status(401).json({
            msg: "no reconoce el Token"
        })
    }

try {

    const {uid}=jwt.verify(token,process.env.SECRETORPRIVATE)
    
    //LEER EL USUARIO
    const usuario=await Usuario.findById(uid)

    //VERIFICAR SI EL USUARIO EXISTE
    if(!usuario){
        res.status(401).json({
            msg: "Token no es Vaálido"
        });
    }

    //VERIFICAR SI EL USUARIO ESTA ACTIVO
    

    next();
} catch (error) {
    console.log(error)
    res.status(401).json({
        msg:"Token no Válido"
    })
}

   
}


module.export={
    validarJWT
}