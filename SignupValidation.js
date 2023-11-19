function Validation(values){
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
   //NOMBRE
    if(values.Nombre===""){
        error.Nombre="El campo  no deberia estar vacio"
    }else{
        error.Nombre=""
    }
    //CORREO
    if(values.Correo===""){
        error.Correo="El campo  no deberia estar vacio"
    }else if(!email_pattern.test(values.Correo)){
    error.Correo= "Correo no valido"
    }else{
        error.Correo=""
    }
    //USUARIO
    if(values.Usuario===""){
        error.Usuario="El campo  no deberia estar vacio"
    }else{
        error.Usuario=""
    }

//CONTRASEÑA
    if(values.Contrasena ===""){
        error.Contrasena="El campo no deberia estar vacio"
    }else if(!password_pattern.test(values.Contrasena)){
        error.Contrasena="Contraseña no valida"
    }else{
        error.Contrasena=""
    }
    return error;
    
    }
    export default Validation;
    