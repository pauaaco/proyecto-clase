
const express= require("express");
const mysql= require('mysql');
const cors= require('cors');

const app= express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "proyecto_clase"
})


app.post('/signup',(req, res)=>{
    const sql="INSERT INTO usuarios (`Nombre`,`Correo`,`Usuario`,`Contrasena`) VALUES (?)";
   const values= [
    req.body.Nombre,
    req.body.Correo,
    req.body.Usuario,
    req.body.Contrasena
   ]
   db.query(sql,[values],(err, data)=>{
    if(err){
        return res.json("Error");
    }
    return res.json(data);
   })


})


app.post('/login',(req, res)=>{
    const sql="SELECT * FROM usuarios WHERE `Correo` = ? AND `Contrasena` = ?";
   db.query(sql,[req.body.Correo,req.body.Contrasena],(err, data)=>{
    if(err){
        return res.json("Error");
    }
    if(data.length>0){
        return res.json("success");
    }else{
        return res.json("Fail");
    }
   })

})

app.post('/signupc',(req, res)=>{
    const sql="INSERT INTO clientes (`Nombre`,`Apellidos`,`Tipo_identificacion`,`Numero_identificacion`,`Ciudad`,`Correo`) VALUES (?)";
   const values= [
    req.body.Nombres,
    req.body.Apellidos,
    req.body.tipo,
    req.body.num,
    req.body.ciudad,
    req.body.correo
   ]
   db.query(sql,[values],(err, data)=>{
    if(err){
        return res.json("Error");
    }
    return res.json(data);
   })


})



app.get('/inventario',(req,res)=>{
    const sql="SELECT * FROM inventario";
    db.query(sql,(err,data)=>{
        if(err) {
            return res.json(err);
        }
        return res.json(data);
    })
})

app.post('/create',(req,res)=>{
    const sql="INSERT INTO inventario (`Id_producto`,`Descripcion`,`Existencias`,`Entradas`,`Salidas`) VALUES (?)";
    const values=[
        req.body.Id_producto,
        req.body.Descripcion,
        req.body.Existencias,
        req.body.Entradas,
        req.body.Salidas
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json("created"); 
    })
})

app.put('/update1/:id',(req,res)=>{
    const sql="UPDATE inventario set `Id_producto`=?,`Descripcion`=?,`Existencias`=?,`Entradas`=?,`Salidas`=? WHERE id=?";
    const id=req.params.id;
    const values=[
        req.body.Id_producto,
        req.body.Descripcion,
        req.body.Existencias,
        req.body.Entradas,
        req.body.Salidas
    ]
    db.query(sql,[...values,id],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json("updated"); 
    })
})




app.get('/salida',(req,res)=>{
    const sql="SELECT * FROM salidas";
    db.query(sql,(err,data)=>{
        if(err) {
            return res.json(err);
        }
        return res.json(data);
    })
})

app.post('/create1',(req,res)=>{
    const sql="INSERT INTO entradas (`No_factura`,`Fecha`,`Codigo_Producto`,`Cantidad`) VALUES (?)";
    const values=[
        req.body.No_factura,
        req.body.Fecha,
        req.body.Cod_producto,
        req.body.Cantidad,
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json("created"); 
    })
})

app.put('/update/:id',(req,res)=>{
    const sql="UPDATE entradas set `No_factura`=?,`Fecha`=?,`Codigo_Producto`=?,`Cantidad`=? WHERE id=?";
    const id=req.params.id;
    const values=[
        req.body.No_factura,
        req.body.Fecha,
        req.body.Cod_producto,
        req.body.Cantidad,
    ]
    db.query(sql,[...values,id],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json("Updated"); 
    })
})

app.get('/entrada',(req,res)=>{
    const sql="SELECT * FROM entradas";
    db.query(sql,(err,data)=>{
        if(err) {
            return res.json(err);
        }
        return res.json(data);
    })
})

app.post('/facliente',(req, res)=>{
    const sql="SELECT * FROM clientes WHERE `Numero_identificacion` = ? ";
   db.query(sql,[req.body.Correo,req.body.Contrasena],(err, data)=>{
    if(err){
        return res.json("Error");
    }
    if(data.length>0){
        return res.json("success");
    }else{
        return res.json("Fail");
    }
   })

})





app.listen(8081,()=>{
    console.log("listening");
})



