//metodo especial para manejar las rutas
const {Router}=require("express");
const {check}=require('express-validator'); //el check es un middlewares
const {pedidosGet,pedidosPost,pedidosPut,pedidosDelete}=require("../controllers/pedidos");
const {validarCampos}=require('../middlewares/validar-campos');
const router=Router();
const {existeCategPorId}=require("../helpers/db-validapedidos");

 
router.get('/',
 pedidosGet)       
 
 

 //el isEmail, verifica que el campo email, tenga formato de correo electronico
 router.post('/',
 [
 check("menu","El Menu no puede estar vacio").notEmpty() , 
 check("cant","Cantidad no Valida").isIn([0]),
 check("preciounit","El Precio no puede se Cero").isIn([0]),
 validarCampos],
 pedidosPost)       
 
 router.put('/:id',
 [
 check("id").custom(existePedidoId),
 check("menu","El Menu no puede estar vacio").notEmpty() , 
 check("cant","Cantidad no Valida").isIn([0]),
 check("preciounit","El Precio no puede se Cero").isIn([0]),   
 validarCampos], 
 pedidosPut)       

 router.delete('/:id',
 [check("id","No es un ID valido").isMongoId(),
 check("id").custom(existePedidoId),
 validarCampos       
 ]
 ,pedidosDelete )    
 
 module.exports=router