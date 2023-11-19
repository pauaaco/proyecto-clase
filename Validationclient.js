function Validationc(values){
    let error={}
   //NOMBRE
    if(values.Nombres===""){
        error.Nombres="El campo  no deberia estar vacio"
    }else{
        error.Nombres=""
    }
    //CORREO
    if(values.Apellidos===""){
        error.Apellidos="El campo  no deberia estar vacio"
    }else{
        error.Apellidos=""
    }
    //USUARIO
    if(values.tipo===""){
        error.tipo="El campo  no deberia estar vacio"
    }else{
        error.tipo=""
    }

//CONTRASEÑA
    if(values.num===""){
        error.num="El campo no deberia estar vacio"
    }else{
        error.num=""
    }

    if(values.ciudad===""){
        error.ciudad="El campo no deberia estar vacio"
    }else{
        error.ciudad=""
    }

    if(values.correo===""){
        error.correo="El campo no deberia estar vacio"
    }else{
        error.correo=""
    }

    return error;
    
    }

   
    export default Validationc;
    