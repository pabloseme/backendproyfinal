//metodo especial para manejar las rutas
const {Router}=require("express");
const {check}=require('express-validator'); //el check es un middlewares
const {pedidoGet,pedidoPost,pedidoPut,pedidoDelete}=require("../controllers/pedid");
const {validarCampos}=require('../middlewares/validar-campos');
const router=Router();
const {existeCategPorId}=require("../helpers/db-validacategorias");

//endpoint o ruta, y uso el metodo get, indico la ruta y que funcion se ejecuta, recibe la solicitud y un una respuesta
//router.get('/:codigo',provinciasCodGet)
 
router.get('/',
 pedidoGet)       
 
 

 //el isEmail, verifica que el campo email, tenga formato de correo electronico
 router.post('/',
 [
 check("menu","El Menu no puede estar vacio").notEmpty(),
 check("cant","Cantidad no Valida").isNumeric(),
 check("preciounit","El Precio no puede se Cero").isNumeric(),       
 validarCampos],
 pedidoPost)       
 
 router.put('/:id',
 [check("id","No es un ID valido").isMongoId(),
 check("id").custom(existeCategPorId),
 check("activo","No es un Estado Valido").isIn([true,false]),
 validarCampos], 
 pedidoPut)       

 router.delete('/:id',
 [check("id","No es un ID valido").isMongoId(),
 check("id").custom(existeCategPorId),
 validarCampos       
 ]
 ,pedidoDelete )    
 
 module.exports=router