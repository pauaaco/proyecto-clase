import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from 'axios';
//formulario para registrarse
//linea 28 ayuda a llevar con el boton iniciar sesion a LOGIN
function Signup(){
    const[values,setValues]=useState({
        Nombre:'',
        Correo:'',
        Usuario:'',
        Contrasena:''
    })
    const navigate=useNavigate();
    const[errors, setErrors]=useState({})

    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.Nombre===""&& errors.Correo===""&& errors.Usuario===""&& errors.Contrasena===""){
            axios.post('http://localhost:8081/signup',values)
            .then(res=>{
                navigate('/');

            })
            .catch(err=> console.log(err));
        }

    }



    return(
        <div className='d-flex  justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white rounded p-3 w-50 '>
                <h2>REGISTRO</h2>
                <form action="" onSubmit={handleSubmit}>

                <div className="mb-4">  
                    <label htmlFor="name"><strong>Nombre</strong></label>
                    <input type="text" placeholder='Nombre Completo' name='Nombre' onChange={handleInput}className='form-control  border-dark'/>
                    {errors.Nombre && <span className='text-danger'>{errors.Nombre}</span>}
                </div>

                <div className="mb-4 ">  
                    <label htmlFor="email"><strong>Correo</strong></label>
                    <input type="email" placeholder='Correo' name='Correo'onChange={handleInput}className='form-control rounded border-dark w-100'/>
                    {errors.Correo && <span className='text-danger'>{errors.Correo}</span>}
                </div>

                <div className="mb-4 ">  
                    <label htmlFor="text"><strong>Usuario</strong></label>
                    <input type="text" placeholder='Usuario'name='Usuario'onChange={handleInput}className='form-control rounded border-dark w-100'/>
                    {errors.Usuario && <span className='text-danger'>{errors.Usuario}</span>}
                </div>

                <div className="mb-4 ">  
                    <label htmlFor="password"><strong>Contraseña</strong></label>
                    <input type="password" placeholder='Contraseña' name='Contrasena'onChange={handleInput}className='form-control rounded border-dark w-100'/>
                    {errors.Contrasena && <span className='text-danger'>{errors.Contrasena}</span>}
                </div>
                <input class="form-check-input" type="checkbox" value="aceptar"/>
                <a class="link-offset-2 link-underline link-underline-opacity-0"href="https://www.canva.com/design/DAFz9NV-JIo/s8iFr_rHrYBUgwmcmYfYWg/view?utm_content=DAFz9NV-JIo&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">Acepta nuestra politica de tratamiento de datos</a>

                <button typer='submit'className='btn btn-success w-100 '>Registrarse</button>
                


               

                <Link to="/" className='btn btn-dark border w-100 '>Iniciar Sesión</Link>
                </form>
                
            </div>
        </div>

      

    )
}
export default Signup