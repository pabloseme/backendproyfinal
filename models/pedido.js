const {Schema,model}=require('mongoose')

const PedidoSchema=Schema({
    fecha:{
        type: String,
        required:[true,"El nombre del Menu es obligatorio"]
    },
    menu:{
        type:String,
        required:[true,"El Precio es Obligatoria"],
        unique:true
    },
    cant:{
        type: Number,
        required:[true,"La categoria es Obligatoria"]
    },   
    preciounit:{
        type:Number
    },
    estado:{
        type:Boolean,
        enum:["PENDIENTE","REALIZADO"], 
        default: "PENDIENTE"
    },
    usuario:{
        type: String,
        default: "Invitado"
    },
    activo:{
        type:Boolean,         
        default: true
    },    
})


//Menu, representa el modelo pero puede llevar otro nombre distinto al del archivo
module.exports=model("Pedido",MenuSchema)